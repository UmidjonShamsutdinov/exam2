import { combineReducers } from "redux";
import { productReducer } from "./reducer";



const rootReducer = combineReducers({
    products_data : productReducer
    
})


export default rootReducer