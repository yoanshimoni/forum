import createDateContext from "./createDataContext";
import threadsApi from "../api/threadsApi";

const threadReducer = (state, action) => {
  switch (action.type) {
    case "fetch_threads": {
      return { threadList: [...action.payload] };
    }
    default:
      return state;
  }
};

const fetchThreads = (dispatch) => async () => {
  try {
    const response = await threadsApi.get(`/threads`);
    console.log(response);
    dispatch({ type: "fetch_threads", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const { Context, Provider } = createDateContext(
  threadReducer,
  { fetchThreads },
  { threadList: [] }
);
