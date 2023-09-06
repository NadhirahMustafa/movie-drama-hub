import { combineReducers } from "redux";
import { selectedDataReducer } from "./dataReducer";
import viewReducer from "./viewTypeReducer";
import showTypeReducer from './showTypeReducer';

const rootReducer = combineReducers({
  selectedData: selectedDataReducer,
  viewType: viewReducer,
  showType: showTypeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
