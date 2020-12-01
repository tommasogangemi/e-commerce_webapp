import { takeLatest, put, all, call } from 'redux-saga/effects';
import userConst from './user-constants';
import {
	signinSuccess,
	signinFailure,
	signoutSuccess,
	signoutFailure,
	signupSuccess,
} from './user-actions';
import {
	auth,
	googleProvider,
	createUserProfileDocument,
	getCurrentUser,
} from '../..//firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
	try {
		const userRef = yield call(
			createUserProfileDocument,
			userAuth,
			additionalData
		);
		const userSnapshot = yield userRef.get();
		yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signinFailure(error));
	}
}

export function* signinWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signinFailure(error));
	}
}

export function* signinWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signinFailure(error));
	}
}

export function* userSignup({ payload: { displayName, email, password } }) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield put(signupSuccess({ user, additionalData: { displayName } }));
	} catch (error) {
		yield put(signinFailure(error));
	}
}

export function* signinAfterSignup({ payload: { user, additionalData } }) {
	yield getSnapshotFromUserAuth(user, additionalData);
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signinFailure(error));
	}
}

export function* userSignout() {
	try {
		yield auth.signOut();
		yield put(signoutSuccess());
	} catch (error) {
		yield put(signoutFailure(error));
	}
}

export function* onGoogleSignin() {
	yield takeLatest(userConst.GOOGLE_SIGNIN_START, signinWithGoogle);
}

export function* onEmailSignin() {
	yield takeLatest(userConst.EMAIL_SIGNIN_START, signinWithEmail);
}

export function* onUserSignup() {
	yield takeLatest(userConst.SIGNUP_START, userSignup);
}

export function* onSignupSuccess() {
	yield takeLatest(userConst.SIGNUP_SUCCESS, signinAfterSignup);
}

export function* onCheckUserSession() {
	yield takeLatest(userConst.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onUserSignout() {
	yield takeLatest(userConst.SIGNOUT_START, userSignout);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignin),
		call(onEmailSignin),
		call(onCheckUserSession),
		call(onUserSignout),
		call(onUserSignup),
		call(onSignupSuccess),
	]);
}
