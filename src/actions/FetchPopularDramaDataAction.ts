import { Dispatch } from 'redux';
import { getPopularDrama } from "../services/api.service";

export const FETCH_POPULAR_DRAMA_DATA_REQUEST = "FETCH_POPULAR_DRAMA_DATA_REQUEST";
export const FETCH_POPULAR_DRAMA_DATA_SUCCESS = "FETCH_POPULAR_DRAMA_DATA_SUCCESS";
export const FETCH_POPULAR_DRAMA_DATA_FAILURE = "FETCH_POPULAR_DRAMA_DATA_FAILURE";

export const fetchPopularDramaDataRequest = () => ({ type: FETCH_POPULAR_DRAMA_DATA_REQUEST });
export const fetchPopularDramaDataSuccess = (data: any) => ({ type: FETCH_POPULAR_DRAMA_DATA_SUCCESS, payload: data });
export const fetchPopularDramaDataFailure = (error: any) => ({ type: FETCH_POPULAR_DRAMA_DATA_FAILURE, error });

export const fetchPopularDramaData: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPopularDramaDataRequest());
    try {
      const data = await getPopularDrama(page);
      dispatch(fetchPopularDramaDataSuccess(data));
    } catch (error) {
      dispatch(fetchPopularDramaDataFailure(error));
    }
  };
};