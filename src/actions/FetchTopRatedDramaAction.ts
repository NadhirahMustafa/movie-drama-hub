import { Dispatch } from "redux";
import { getTopRatedDrama } from "../services/api.service";

export const FETCH_TOP_RATED_DRAMA_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_TOP_RATED_DRAMA_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_TOP_RATED_DRAMA_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchTopRatedDramaDataRequest = () => ({
  type: FETCH_TOP_RATED_DRAMA_DATA_REQUEST,
});
export const fetchTopRatedDramaDataSuccess = (data: any, totalPages: number) => ({
  type: FETCH_TOP_RATED_DRAMA_DATA_SUCCESS,
  payload: data,
  totalPages: totalPages,
});
export const fetchTopRatedDramaDataFailure = (error: any) => ({
  type: FETCH_TOP_RATED_DRAMA_DATA_FAILURE,
  error,
});

export const fetchTopRatedDramaData: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchTopRatedDramaDataRequest());
    try {
      const data = await getTopRatedDrama(page);
      dispatch(fetchTopRatedDramaDataSuccess(data.results, data.total_pages));
    } catch (error) {
      dispatch(fetchTopRatedDramaDataFailure(error));
    }
  };
};
