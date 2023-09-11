import { Dispatch } from 'redux';
import { getDramaOnAir } from "../services/api.service";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
export const fetchDataSuccess = (data: any) => ({ type: FETCH_DATA_SUCCESS, payload: data });
export const fetchDataFailure = (error: any) => ({ type: FETCH_DATA_FAILURE, error });


export const fetchOnAirData: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const data = await getDramaOnAir(page);
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};