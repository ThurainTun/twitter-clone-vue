import {
  LOGIN_USER,
  SIGNUP_USER,
  AUTH_FAIL,
  EMAIL_FAIL,
  RESET_PASSWORD_FAIL,
  CLEAR_ERROR,
  USER_LOADED,
  FAIL,
  LOGOUT_USER
} from "../actions/types";

const initialState = {
  user: null,
  isAuthenticated: null,
  loading: true,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        loading: false
      };

    case LOGIN_USER:
    case SIGNUP_USER:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.data.user,
        isAuthenticated: true,
        loading: false
      };

    case LOGOUT_USER:
      localStorage.removeItem("token");
    case AUTH_FAIL:
    case EMAIL_FAIL:
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: true,
        error: action.payload
      };

    case FAIL:
      return {
        ...state,
        error: action.payload
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default authReducer;
