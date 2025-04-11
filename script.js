//Imports
import store from "./store.js";

//Actions
{
  type: "ADD";
}

{
  type: "SUBTRACT";
}

{
  type: "RESET";
}

export default function reducer(state = 0, action) {
  if (action.type === "ADD") {
    return state + 1;
  } else if (action.type === "SUBTRACT") {
    return state - 1;
  } else if (action.type === "RESET") {
    return (state = 0);
  }
}
