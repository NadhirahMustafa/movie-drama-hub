import { combineReducers } from "redux";
import { selectedDataReducer } from "./dataReducer";

const rootReducer = combineReducers({
  selectedData: selectedDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
