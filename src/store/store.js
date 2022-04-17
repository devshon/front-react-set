import { createStore } from "redux";

const initalState = {
  user: {
    id: "",
    name: "",
    bookmark: "NO",
  },
};
const reducer = (state = initalState, action) => {
  let newState = state;

  switch (action.type) {
    case "BOOKMARK":
      newState = {
        ...state,
        user: {
          ...state.user,
          bookmark: "YES",
        },
      };
      return newState;
    default:
      return newState;
  }
};
const store = createStore(reducer);

export default store;
