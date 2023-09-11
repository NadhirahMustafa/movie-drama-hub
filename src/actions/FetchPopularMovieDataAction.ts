import { Dispatch } from 'redux';
import { getPopularMovies } from "../services/api.service";

export const FETCH_POPULAR_MOVIE_DATA_REQUEST = "FETCH_POPULAR_MOVIE_DATA_REQUEST";
export const FETCH_POPULAR_MOVIE_DATA_SUCCESS = "FETCH_POPULAR_MOVIE_DATA_SUCCESS";
export const FETCH_POPULAR_MOVIE_DATA_FAILURE = "FETCH_POPULAR_MOVIE_DATA_FAILURE";

export const fetchPopularMovieDataRequest = () => ({ type: FETCH_POPULAR_MOVIE_DATA_REQUEST });
export const fetchPopularMovieDataSuccess = (data: any) => ({ type: FETCH_POPULAR_MOVIE_DATA_SUCCESS, payload: data });
export const fetchPopularMovieDataFailure = (error: any) => ({ type: FETCH_POPULAR_MOVIE_DATA_FAILURE, error });

export const fetchPopularMovieData: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPopularMovieDataRequest());
    try {
      const data = await getPopularMovies(page);
      dispatch(fetchPopularMovieDataSuccess(data));
    } catch (error) {
      dispatch(fetchPopularMovieDataFailure(error));
    }
  };
};