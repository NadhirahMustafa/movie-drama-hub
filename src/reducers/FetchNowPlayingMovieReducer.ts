import {
  FETCH_NOW_PLAYING_MOVIE_DATA_REQUEST,
  FETCH_NOW_PLAYING_MOVIE_DATA_SUCCESS,
  FETCH_NOW_PLAYING_MOVIE_DATA_FAILURE,
} from "../actions/FetchNowPlayingMovieAction";
import { fetchDataInitialState } from "../constant/initialize";

const fetchNowPlayingMovieDataReducer = (state = fetchDataInitialState, action: any) => {
  switch (action.type) {
    case FETCH_NOW_PLAYING_MOVIE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_NOW_PLAYING_MOVIE_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        totalPages: action.totalPages,
        isLoading: false,
        page: state.page + 1,
      };
    case FETCH_NOW_PLAYING_MOVIE_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default fetchNowPlayingMovieDataReducer;
