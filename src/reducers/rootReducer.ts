import { combineReducers } from "redux";
import { selectedDataReducer } from "./DataReducer";
import viewReducer from "./ViewTypeReducer";
import showTypeReducer from './ShowTypeReducer';

const rootReducer = combineReducers({
  selectedData: selectedDataReducer,
  viewType: viewReducer,
  showType: showTypeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
