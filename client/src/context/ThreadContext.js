import createDateContext from "./createDataContext";
import usersApi from "../api/usersApi";
import threadsData from "../threadsData";

const threadReducer = (state, action) => {
  switch (action.type) {
    case "get_threads": {
      return { threadList: [...action.payload] };
    }
    default:
      return state;
  }
};

const getThreads = (dispatch) => async () => {
  try {
    console.log(threadsData);
    // const response = await usersApi.get(`/threads`);
    dispatch({ type: "get_threads", payload: threadsData });
  } catch (err) {
    console.log(err);
  }
};

export const { Context, Provider } = createDateContext(
  threadReducer,
  { getThreads },
  { threadList: [] }
);
