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
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBTRACT":
      return state > 0 ? state - 1 : state;
    case "RESET":
      return (state = 0);
    default:
      return state;
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
