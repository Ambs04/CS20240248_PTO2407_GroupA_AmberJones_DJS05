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

//reducer function with switch case to handle different action types
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

//event listeners for the buttons in the UI which dispacth the actions
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

//subscriber to notify console when state has been changed and waht to.
const handler = store.subscribe(() => {
  console.log(`Store has changed to: ${store.getState()}`);
});

//console tests

// initial state: should output 0
console.log(store.getState());

// addition twice: should output 2
store.dispatch({ type: "ADD" });

store.dispatch({ type: "ADD" });

//subtraction : should output 1
store.dispatch({ type: "SUBTRACT" });

//reset to initial state: should output 0
store.dispatch({ type: "RESET" });
