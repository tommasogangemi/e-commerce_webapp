import { all, put, call, takeLatest } from 'redux-saga/effects';
import { clearCart } from './cart-actions';
import userConst from '../user/user-constants';

export function* clearCartOnSignout() {
	yield put(clearCart());
}

export function* onSignoutSuccess() {
	yield takeLatest(userConst.SIGNOUT_SUCCESS, clearCartOnSignout);
}

export function* cartSagas() {
	yield all([call(onSignoutSuccess)]);
}
