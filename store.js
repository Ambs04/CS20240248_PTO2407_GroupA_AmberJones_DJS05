import { createStore } from "https://cdnjs.cloudflare.com/ajax/libs/redux/5.0.1/redux.legacy-esm.min.js";
import reducer from "./script.js";

//creates store and takes the reducer function as a parameter
const store = createStore(reducer);

export default store;
