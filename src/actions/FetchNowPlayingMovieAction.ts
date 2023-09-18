import { Dispatch } from "redux";
import { getNowPlayingMovies } from "../services/api.service";

export const FETCH_NOW_PLAYING_MOVIE_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_NOW_PLAYING_MOVIE_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_NOW_PLAYING_MOVIE_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchNowPlayingMovieDataRequest = () => ({
  type: FETCH_NOW_PLAYING_MOVIE_DATA_REQUEST,
});
export const fetchNowPlayingMovieDataSuccess = (data: any, totalPages: number) => ({
  type: FETCH_NOW_PLAYING_MOVIE_DATA_SUCCESS,
  payload: data,
  totalPages: totalPages,
});
export const fetchNowPlayingMovieDataFailure = (error: any) => ({
  type: FETCH_NOW_PLAYING_MOVIE_DATA_FAILURE,
  error,
});

export const fetchNowPlayingMovieData: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchNowPlayingMovieDataRequest());
    try {
      const data = await getNowPlayingMovies(page);
      dispatch(fetchNowPlayingMovieDataSuccess(data.results, data.total_pages));
    } catch (error) {
      dispatch(fetchNowPlayingMovieDataFailure(error));
    }
  };
};
