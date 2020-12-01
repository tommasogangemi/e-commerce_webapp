import userConst from './user-constants';

export const setCurrentUser = user => ({
	type: userConst.SET_CURRENT_USER,
	payload: user,
});

export const googleSigninStart = () => ({
	type: userConst.GOOGLE_SIGNIN_START,
});

export const emailSigninStart = emailAndPassword => ({
	type: userConst.EMAIL_SIGNIN_START,
	payload: emailAndPassword,
});

export const signinSuccess = user => ({
	type: userConst.SIGNIN_SUCCESS,
	payload: user,
});

export const signinFailure = error => ({
	type: userConst.SIGNIN_FAILURE,
	payload: error,
});

export const checkUserSession = () => ({
	type: userConst.CHECK_USER_SESSION,
});

export const userSignupStart = signupData => ({
	type: userConst.SIGNUP_START,
	payload: signupData,
});

export const signupSuccess = ({ user, additionalData }) => ({
	type: userConst.SIGNUP_SUCCESS,
	payload: { user, additionalData },
});

export const signoutStart = () => ({
	type: userConst.SIGNOUT_START,
});

export const signoutSuccess = () => ({
	type: userConst.SIGNOUT_SUCCESS,
});

export const signoutFailure = error => ({
	type: userConst.SIGNOUT_FAILURE,
	payload: error,
});
