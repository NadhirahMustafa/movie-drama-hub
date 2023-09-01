import { dramaInterface } from "./interface";

export interface DataState {
  selectedData: dramaInterface;
}
export interface GetSelectedDataAction {
  type: "SET_SELECTED_DATA";
  payload: dramaInterface;
}

export type selectedDataAction = GetSelectedDataAction;