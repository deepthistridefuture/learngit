import {createStore} from "redux"
import laptopReducer from "./reducers/laptopReducer"

//combine the reducer with store
const store = createStore(laptopReducer)
export default store;
