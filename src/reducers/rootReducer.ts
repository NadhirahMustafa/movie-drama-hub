import { combineReducers } from "redux";
import { selectedDataReducer } from "./SelectedDataReducer";
import viewReducer from "./ViewTypeReducer";
import showTypeReducer from "./ShowTypeReducer";
import fetchOnAirDataReducer from "./FetchOnAirDataReducer";
import fetchPopularMovieDataReducer from "./FetchPopularMovieReducer";
import fetchPopularDramaDataReducer from "./FetchPopularDramaReducer";

const rootReducer = combineReducers({
  selectedData: selectedDataReducer,
  viewType: viewReducer,
  showType: showTypeReducer,
  fetchOnAirData: fetchOnAirDataReducer,
  fetchPopularMovieData: fetchPopularMovieDataReducer,
  fetchPopularDramaData: fetchPopularDramaDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
