
const SET_MESSAGE = "SET_MESSAGE";
const SET_FILTER='SET_FILTER';
const SET_INIT_TAGS='SET_INIT_TAGS';


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
  Filter:[],
  initTags:[],
};

const MessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:return { ...state, Message: [...action.data.data] };
    case SET_FILTER:return { ...state, Filter: [...action.filter] };
    case SET_INIT_TAGS:debugger; return { ...state, Filter:action.tags };
    default:
      return { ...state };
  }
};


export const messageAC = (data) => {{debugger;return { type: SET_MESSAGE,data };}};
export const filterAC=(filter)=>{{return{type:SET_FILTER,filter}}}
export const tagsAC=(tags)=>{{return{type:SET_INIT_TAGS,tags}}}

export default MessageReducer;
