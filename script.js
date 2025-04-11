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
    return state > 0 ? state - 1 : state;
  } else if (action.type === "RESET") {
    return (state = 0);
  }
}

document.getElementById("increment-btn").addEventListener("click", function () {
  store.dispatch({
    type: "ADD",
  });
  document.querySelector("#view-tally p").textContent = store.getState();
});

document.getElementById("decrement-btn").addEventListener("click", function () {
  store.dispatch({
    type: "SUBTRACT",
  });
  document.querySelector("#view-tally p").textContent = store.getState();
});

document.getElementById("reset-btn").addEventListener("click", function () {
  store.dispatch({
    type: "RESET",
  });
  document.querySelector("#view-tally p").textContent = store.getState();
});
