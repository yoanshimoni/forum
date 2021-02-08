import createDateContext from "./createDataContext";
import threadsApi from "../api/threadsApi";

const messageReducer = (state, action) => {
  switch (action.type) {
    case "fetch_messages": {
      return { messageList: [...action.payload] };
    }
    default:
      return state;
  }
};

const fetchMessages = (dispatch) => async () => {
  try {
    const response = await threadsApi.get(`/messages`);
    dispatch({ type: "fetch_messages", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

// const postMessage = (dispatch) => async (content, recipientId) => {
//   try {
//     const response = await threadsApi.get(`/threads`);
//     dispatch({ type: "fetch_threads", payload: response.data });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const { Context, Provider } = createDateContext(
  messageReducer,
  { fetchMessages },
  { messageList: [] }
);
