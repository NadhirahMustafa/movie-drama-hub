import { trendingInterface, popularDramaInterface, popularMoviesInterface } from "../interface/interface";
import { GetSelectedDataAction, GetSelectedDramaDataAction, GetSelectedMovieDataAction } from "../interface/redux.interface";

export const setSelectedData = (
  selectedData: trendingInterface
): GetSelectedDataAction => ({
  type: "SET_SELECTED_DATA",
  payload: selectedData,
});

export const setSelectedDramaData = (
  selectedData: popularDramaInterface
): GetSelectedDramaDataAction => ({
  type: "SET_SELECTED_DATA",
  payload: selectedData,
});

export const setSelectedMovieData = (
  selectedData: popularMoviesInterface
): GetSelectedMovieDataAction => ({
  type: "SET_SELECTED_DATA",
  payload: selectedData,
});
