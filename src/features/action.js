import * as types from "./constant";
import { auth } from "../utils/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = ({ user, additionalData }) => ({
  type: types.REGISTER_SUCCESS,
  payload: { user, additionalData },
});

const registerError = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginError = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutError = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

export const registerInitiate =
  (email, password, displayName) => async (dispatch) => {
    try {
      dispatch(registerStart());

      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then(({ user }) => {
        dispatch(registerSuccess({ user, additionalData: { displayName } }));
      });
    } catch (error) {
      dispatch(registerError(error.message));
    }
  };

export const loginInitiate = (email, password) => async (dispatch) => {
  try {
    dispatch(loginStart());

    const user = await signInWithEmailAndPassword(auth, email, password).then(
      ({ user }) => {
        dispatch(loginSuccess(user));
      }
    );
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logoutInitiate = () => async (dispatch) => {
  try {
    dispatch(logoutStart());

    const user = await signOut().then((resp) => dispatch(logoutSuccess()));
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};
