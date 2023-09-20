import { Dispatch } from "redux";
import {
  getDramaOnAir,
  getNowPlayingDrama,
  getNowPlayingMovies,
  getPopularDrama,
  getPopularMovies,
  getTopRatedDrama,
  getTopRatedMovies,
} from "../services/api.service";
import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
} from "../constant/redux";

export const fetchNowPlayingMovieData: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const data = await getNowPlayingMovies(page);
      dispatch(fetchDataSuccess(data.results, data.total_pages));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};

export const fetchNowPlayingDramaData: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const data = await getNowPlayingDrama(page);
      dispatch(fetchDataSuccess(data.results, data.total_pages));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};

export const fetchOnAirData: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const data = await getDramaOnAir(page);
      dispatch(fetchDataSuccess(data.results, data.total_pages));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};

export const fetchPopularDramaData: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const data = await getPopularDrama(page);
      dispatch(fetchDataSuccess(data.results, data.total_pages));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};

export const fetchPopularMovieData: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const data = await getPopularMovies(page);
      dispatch(fetchDataSuccess(data.results, data.total_pages));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};

export const fetchTopRatedDramaData: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const data = await getTopRatedDrama(page);
      dispatch(fetchDataSuccess(data.results, data.total_pages));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};

export const fetchTopRatedMovieData: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const data = await getTopRatedMovies(page);
      dispatch(fetchDataSuccess(data.results, data.total_pages));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};
