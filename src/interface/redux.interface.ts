import { trendingInterface, popularDramaInterface, popularMoviesInterface } from "./interface";

export interface DataState {
  selectedData: trendingInterface;
}

export interface ViewState {
  viewType: string;
}

export interface GetSelectedDataAction {
  type: "SET_SELECTED_DATA";
  payload: trendingInterface;
}
export interface GetSelectedDramaDataAction {
  type: "SET_SELECTED_DATA";
  payload: popularDramaInterface;
}
export interface GetSelectedMovieDataAction {
  type: "SET_SELECTED_DATA";
  payload: popularMoviesInterface;
}


export type selectedDataAction = GetSelectedDataAction;
export type selectedDataDramaAction  = GetSelectedDramaDataAction;
export type selectedDataMovieAction  = GetSelectedMovieDataAction;