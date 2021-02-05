import createDataContext from "./createDataContext";
import threadsApi from "../api/threadsApi";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signup": {
      return { ...state, token: action.payload };
    }
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ name, password }) => {
  try {
    const response = await threadsApi.post("/signup", { name, password });
    dispatch({ type: "signup", payload: response.data.token });
  } catch (error) {
    console.log(error);
    // dispatch({ type: "add_error", payload: "wrong name or password" });
  }
};

// const signin = (dispatch) => async ({ email, password }) => {
//   try {
//     const response = await trackerApi.post("/signin", { email, password });
//     await AsyncStorage.setItem("token", response.data.token);
//     dispatch({ type: "signin", payload: response.data.token });
//   } catch (error) {
//     dispatch({ type: "add_error", payload: "wrong email or password" });
//   }
// };

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup },
  { token: null }
);
