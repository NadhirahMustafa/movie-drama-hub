import { DataState, selectedDataAction } from "../interface/redux.interface";
import { SelectedDataInit } from "../constant/initialize";

const initialState: DataState = {
  selectedData: SelectedDataInit,
};

export const selectedDataReducer = (
  state = initialState,
  action: selectedDataAction
): DataState => {
  switch (action.type) {
    case "SET_SELECTED_DATA":
      return {
        ...state,
        selectedData: action.payload,
      };
    default:
      return state;
  }
};
