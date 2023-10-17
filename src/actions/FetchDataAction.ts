import { Dispatch } from "redux";
import {
  getOnAirDrama,
  getNowPlayingDrama,
  getNowPlayingMovies,
  getPopularDrama,
  getPopularMovies,
  getTopRatedDrama,
  getTopRatedMovies,
  getUpcomingMovies,
  getDiscoverMovies,
} from "../services/api.service";
import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
} from "../constant/redux";

export const fetchNowPlayingMovieAction: any = (page: number) => {
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

export const fetchNowPlayingDramaAction: any = (page: number) => {
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

export const fetchOnAirDramaAction: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const data = await getOnAirDrama(page);
      dispatch(fetchDataSuccess(data.results, data.total_pages));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};

export const fetchPopularDramaAction: any = (page: number) => {
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

export const fetchPopularMovieAction: any = (page: number) => {
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

export const fetchTopRatedDramaAction: any = (page: number) => {
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

export const fetchTopRatedMovieAction: any = (page: number) => {
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

export const fetchUpcomingMovieAction: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const data = await getUpcomingMovies(page);
      dispatch(fetchDataSuccess(data.results, data.total_pages));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};

export const fetchDiscoverMovieAction: any = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const data = await getDiscoverMovies(page);
      dispatch(fetchDataSuccess(data.results, data.total_pages));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};