import CarticonClickreducer from "./Carticonclick";
import loginclickreducer from "./Loginclick";
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        CarticonClickreducer,
        loginclickreducer
    }
);

export default rootReducer;