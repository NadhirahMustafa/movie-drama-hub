import { combineReducers } from "redux";
import { selectedDataReducer } from "./dataReducer";
import viewReducer from "./viewTypeReducer";

const rootReducer = combineReducers({
  selectedData: selectedDataReducer,
  viewType: viewReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
