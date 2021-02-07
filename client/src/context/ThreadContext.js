import createDateContext from "./createDataContext";
import threadsApi from "../api/threadsApi";

const threadReducer = (state, action) => {
  switch (action.type) {
    case "fetch_threads": {
      return { threadList: [...action.payload] };
    }
    case "create_thread": {
      return { threadList: [...state.threadList, action.payload] };
    }
    case "delete_thread": {
      return {
        threadList: [
          ...state.threadList.filter((thread) => thread._id !== action.payload),
        ],
      };
    }
    case "create_comment": {
      return {
        threadList: state.threadList.map((thread) => {
          return thread._id === action.payload.threadId
            ? action.payload.newThread
            : thread;
        }),
      };
    }
    case "delete_comment": {
      return {
        threadList: state.threadList.map((thread) => {
          return thread._id === action.payload.threadId
            ? action.payload.newThread
            : thread;
        }),
      };
    }
    default:
      return state;
  }
};

const fetchThreads = (dispatch) => async () => {
  try {
    const response = await threadsApi.get(`/threads`);
    dispatch({ type: "fetch_threads", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const createThread = (dispatch) => async (content) => {
  try {
    const response = await threadsApi.post(`/threads`, { content });
    dispatch({ type: "create_thread", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const deleteThread = (dispatch) => async (threadId) => {
  console.log(threadId);
  try {
    // await threadsApi.delete(`/threads`, { data: { threadId } });
    dispatch({ type: "delete_thread", payload: threadId });
  } catch (err) {
    console.log(err);
  }
};

const createComment = (dispatch) => async (content, threadId) => {
  try {
    const response = await threadsApi.post(`/comments`, { content, threadId });
    dispatch({
      type: "create_comment",
      payload: { newThread: response.data, threadId },
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteComment = (dispatch) => async (threadId, commentId) => {
  try {
    const response = await threadsApi.delete(`/comments`, {
      threadId,
      commentId,
    });
    console.log(response.data);
    dispatch({
      type: "delete_thread",
      payload: { newThread: response.data, threadId },
    });
  } catch (err) {
    console.log(err);
  }
};

export const { Context, Provider } = createDateContext(
  threadReducer,
  { fetchThreads, createThread, deleteThread, createComment, deleteComment },
  { threadList: [] }
);
