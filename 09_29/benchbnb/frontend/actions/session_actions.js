import * as SessionApiUtil from '../utils/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// regular action creator
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

// thunk action creator
export const signup = user => {
  return dispatch => {
    return SessionApiUtil.signupUser(user).then(newUser => dispatch(receiveCurrentUser(newUser)));
  };
};

export const login = user => {
  return dispatch => {
    return SessionApiUtil.loginUser(user).then(currentUser => dispatch(receiveCurrentUser(currentUser)));
  };
};

export const logout = () => {
  return dispatch => {
    return SessionApiUtil.logoutUser().then(() => dispatch(logoutCurrentUser()));
  };
};