import createDateContext from "./createDataContext";
import threadsApi from "../api/threadsApi";

const messageReducer = (state, action) => {
  switch (action.type) {
    case "fetch_messages": {
      return {
        ...state,
        messageList: [...state.messageList, ...action.payload.messages],
        hasMoreMessages: action.payload.hasMore,
      };
    }
    default:
      return state;
  }
};

const fetchMessages = (dispatch) => async (pageNum) => {
  try {
    const response = await threadsApi.get(`/messages`, { params: { pageNum } });
    if (response.data.length > 0) {
      dispatch({
        type: "fetch_messages",
        payload: { messages: response.data, hasMore: true },
      });
    } else {
      dispatch({
        type: "fetch_messages",
        payload: { messages: [], hasMore: false },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const createMessage = (dispatch) => async (content, recipient) => {
  try {
    const response = await threadsApi.post(`/messages`, {
      content,
      recipient,
    });
  } catch (err) {
    console.log(err);
  }
};

export const { Context, Provider } = createDateContext(
  messageReducer,
  { fetchMessages, createMessage },
  { messageList: [], hasMoreMessages: true }
);
