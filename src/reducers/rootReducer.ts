import { combineReducers } from "redux";
import { selectedDataReducer } from "./SelectedDataReducer";
import viewReducer from "./ViewTypeReducer";
import showTypeReducer from "./ShowTypeReducer";
import {
  fetchNowPlayingDramaDataReducer,
  fetchNowPlayingMovieDataReducer,
  fetchOnAirDataReducer,
  fetchPopularDramaDataReducer,
  fetchPopularMovieDataReducer,
  fetchTopRatedDramaDataReducer,
  fetchTopRatedMovieDataReducer,
} from "./FetchDataReducer";

const rootReducer = combineReducers({
  selectedData: selectedDataReducer,
  viewType: viewReducer,
  showType: showTypeReducer,
  fetchOnAirData: fetchOnAirDataReducer,
  fetchPopularMovieData: fetchPopularMovieDataReducer,
  fetchPopularDramaData: fetchPopularDramaDataReducer,
  fetchNowPlayingMovieData: fetchNowPlayingMovieDataReducer,
  fetchNowPlayingDramaData: fetchNowPlayingDramaDataReducer,
  fetchTopRatedMovieData: fetchTopRatedMovieDataReducer,
  fetchTopRatedDramaData: fetchTopRatedDramaDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
