import { combineReducers } from "redux";
import { selectedDataReducer } from "./SelectedDataReducer";
import viewReducer from "./ViewTypeReducer";
import showTypeReducer from "./ShowTypeReducer";
import fetchOnAirDataReducer from "./FetchOnAirDataReducer";
import fetchPopularMovieDataReducer from "./FetchPopularMovieReducer";
import fetchPopularDramaDataReducer from "./FetchPopularDramaReducer";
import fetchNowPlayingMovieDataReducer from "./FetchNowPlayingMovieReducer";
import fetchNowPlayingDramaDataReducer from "./FetchNowPlayingDramaReducer";

const rootReducer = combineReducers({
  selectedData: selectedDataReducer,
  viewType: viewReducer,
  showType: showTypeReducer,
  fetchOnAirData: fetchOnAirDataReducer,
  fetchPopularMovieData: fetchPopularMovieDataReducer,
  fetchPopularDramaData: fetchPopularDramaDataReducer,
  fetchNowPlayingMovieData: fetchNowPlayingMovieDataReducer,
  fetchNowPlayingDramaData: fetchNowPlayingDramaDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
