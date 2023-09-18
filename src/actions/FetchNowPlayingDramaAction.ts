import { Dispatch } from "redux";
import { getNowPlayingDrama } from "../services/api.service";

export const FETCH_NOW_PLAYING_DRAMA_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_NOW_PLAYING_DRAMA_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_NOW_PLAYING_DRAMA_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchNowPlayingDramaDataRequest = () => ({
  type: FETCH_NOW_PLAYING_DRAMA_DATA_REQUEST,
});
export const fetchNowPlayingDramaDataSuccess = (data: any, totalPages: number) => ({
  type: FETCH_NOW_PLAYING_DRAMA_DATA_SUCCESS,
  payload: data,
  totalPages: totalPages,
});
export const fetchNowPlayingDramaDataFailure = (error: any) => ({
  type: FETCH_NOW_PLAYING_DRAMA_DATA_FAILURE,
  error,
});

export const fetchNowPlayingDramaData: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchNowPlayingDramaDataRequest());
    try {
      const data = await getNowPlayingDrama(page);
      dispatch(fetchNowPlayingDramaDataSuccess(data.results, data.total_pages));
    } catch (error) {
      dispatch(fetchNowPlayingDramaDataFailure(error));
    }
  };
};
