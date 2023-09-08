import { combineReducers } from "redux";
import { selectedDataReducer } from "./SelectedDataReducer";
import viewReducer from "./ViewTypeReducer";
import showTypeReducer from './ShowTypeReducer';
import fetchDataReducer from "./FetchDataReducer";

const rootReducer = combineReducers({
  selectedData: selectedDataReducer,
  viewType: viewReducer,
  showType: showTypeReducer,
  fetchData: fetchDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
