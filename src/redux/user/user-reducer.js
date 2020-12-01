import userConst from './user-constants';

const INITIAL_STATE = {
	currentUser: null,
	error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userConst.SIGNIN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null,
			};
		case userConst.SIGNOUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				error: null,
			};
		case userConst.SIGNIN_FAILURE:
		case userConst.SIGNOUT_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
