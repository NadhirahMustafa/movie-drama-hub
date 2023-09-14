import { Dispatch } from "redux";
import { getDramaOnAir } from "../services/api.service";

export const FETCH_ON_AIR_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_ON_AIR_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_ON_AIR_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchOnAirDataRequest = () => ({
  type: FETCH_ON_AIR_DATA_REQUEST,
});
export const fetchOnAirDataSuccess = (data: any, totalPages: number) => ({
  type: FETCH_ON_AIR_DATA_SUCCESS,
  payload: data,
  totalPages: totalPages,
});
export const fetchOnAirDataFailure = (error: any) => ({
  type: FETCH_ON_AIR_DATA_FAILURE,
  error,
});

export const fetchOnAirData: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchOnAirDataRequest());
    try {
      const data = await getDramaOnAir(page);
      dispatch(fetchOnAirDataSuccess(data.results, data.total_pages));
    } catch (error) {
      dispatch(fetchOnAirDataFailure(error));
    }
  };
};
