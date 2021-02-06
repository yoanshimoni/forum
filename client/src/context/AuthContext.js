import createDataContext from "./createDataContext";
import threadsApi from "../api/threadsApi";
import jwt_decode from "jwt-decode";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signin": {
      return { ...state, token: action.payload, errorMessage: "" };
    }
    case "local_sign": {
      return {
        ...state,
        token: action.payload.token,
        isLoading: false,
        userName: action.payload.userName,
      };
    }
    case "add_error": {
      return { ...state, errorMessage: action.payload };
    }
    case "clear_error": {
      return { ...state, errorMessage: "" };
    }
    default:
      return state;
  }
};

const localSign = (dispatch) => async () => {
  try {
    const token = await window.localStorage.getItem("token");
    let userName = "";
    if (token) {
      const decodedToken = jwt_decode(token);
      userName = decodedToken.userName;
    }
    dispatch({ type: "local_sign", payload: { token, userName } });
  } catch (error) {
    console.log(error);
    dispatch({ type: "local_sign", payload: null });
  }
};

const signup = (dispatch) => async ({ name, password }) => {
  try {
    const response = await threadsApi.post("/signup", { name, password });
    await window.localStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
  } catch (error) {
    console.log(error);
    dispatch({ type: "add_error", payload: "wrong name or password" });
  }
};

const signin = (dispatch) => async ({ name, password }) => {
  try {
    const response = await threadsApi.post("/signin", { name, password });
    await window.localStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
  } catch (error) {
    dispatch({ type: "add_error", payload: "wrong email or password" });
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error" });
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, localSign, clearErrorMessage },
  { token: null, errorMessage: "", isLoading: true, userName: "" }
);
