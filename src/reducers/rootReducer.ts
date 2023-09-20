import { combineReducers } from "redux";
import { selectedDataReducer } from "./SelectedDataReducer";
import {
  fetchNowPlayingDramaDataReducer,
  fetchNowPlayingMovieDataReducer,
  fetchOnAirDataReducer,
  fetchPopularDramaDataReducer,
  fetchPopularMovieDataReducer,
  fetchTopRatedDramaDataReducer,
  fetchTopRatedMovieDataReducer,
} from "./FetchDataReducer";
import { showTypeReducer, viewReducer } from "./ComponentTypeReducer";

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
