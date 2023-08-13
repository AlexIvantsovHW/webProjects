const SET_MESSAGE = "SET_MESSAGE";

let initialState = {
  Message: [
    {
      id: null,
      name: null,
      text: null,
      tag: null,
      time:null,
    },
  ],
};

const MessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      debugger;
      return { ...state, Message: [...action.data.data] };
    default:
      return { ...state };
  }
};

export const messageAC = (data) => {{debugger;return { type: SET_MESSAGE,data };}};

export default MessageReducer;
