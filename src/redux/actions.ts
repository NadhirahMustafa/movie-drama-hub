import { dramaInterface } from "../interface/interface";
import { GetSelectedDataAction } from "../interface/redux.interface";

export const setSelectedData = (
  selectedData: dramaInterface
): GetSelectedDataAction => ({
  type: "SET_SELECTED_DATA",
  payload: selectedData,
});
