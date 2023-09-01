import { trendingInterface } from "./interface";

export interface DataState {
  selectedData: trendingInterface;
}
export interface GetSelectedDataAction {
  type: "SET_SELECTED_DATA";
  payload: trendingInterface;
}

export type selectedDataAction = GetSelectedDataAction;