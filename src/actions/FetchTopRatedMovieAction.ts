import { Dispatch } from "redux";
import { getTopRatedMovies } from "../services/api.service";

export const FETCH_TOP_RATED_MOVIE_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_TOP_RATED_MOVIE_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_TOP_RATED_MOVIE_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchTopRatedMovieDataRequest = () => ({
  type: FETCH_TOP_RATED_MOVIE_DATA_REQUEST,
});
export const fetchTopRatedMovieDataSuccess = (data: any, totalPages: number) => ({
  type: FETCH_TOP_RATED_MOVIE_DATA_SUCCESS,
  payload: data,
  totalPages: totalPages,
});
export const fetchTopRatedMovieDataFailure = (error: any) => ({
  type: FETCH_TOP_RATED_MOVIE_DATA_FAILURE,
  error,
});

export const fetchTopRatedMovieData: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchTopRatedMovieDataRequest());
    try {
      const data = await getTopRatedMovies(page);
      dispatch(fetchTopRatedMovieDataSuccess(data.results, data.total_pages));
    } catch (error) {
      dispatch(fetchTopRatedMovieDataFailure(error));
    }
  };
};
