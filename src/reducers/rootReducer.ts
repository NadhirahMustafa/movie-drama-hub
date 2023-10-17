import { combineReducers } from "redux";
import { selectedDataReducer } from "./SelectedDataReducer";
import {
  fetchNowPlayingDramaReducer,
  fetchNowPlayingMovieReducer,
  fetchOnAirReducer,
  fetchPopularDramaReducer,
  fetchPopularMovieReducer,
  fetchTopRatedDramaReducer,
  fetchTopRatedMovieReducer,
  fetchUpcomingMovieReducer,
  fetchDiscoverMovieReducer
} from "./FetchDataReducer";
import { showTypeReducer, viewReducer } from "./ComponentTypeReducer";

const rootReducer = combineReducers({
  selectedData: selectedDataReducer,
  viewType: viewReducer,
  showType: showTypeReducer,
  fetchOnAirData: fetchOnAirReducer,
  fetchPopularMovieData: fetchPopularMovieReducer,
  fetchPopularDramaData: fetchPopularDramaReducer,
  fetchNowPlayingMovieData: fetchNowPlayingMovieReducer,
  fetchNowPlayingDramaData: fetchNowPlayingDramaReducer,
  fetchTopRatedMovieData: fetchTopRatedMovieReducer,
  fetchTopRatedDramaData: fetchTopRatedDramaReducer,
  fetchUpcomingMovieData: fetchUpcomingMovieReducer,
  fetchDiscoverMovieData: fetchDiscoverMovieReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
