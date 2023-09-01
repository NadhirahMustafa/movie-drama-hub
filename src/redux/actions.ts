import { trendingInterface } from "../interface/interface";
import { GetSelectedDataAction } from "../interface/redux.interface";

export const setSelectedData = (
  selectedData: trendingInterface
): GetSelectedDataAction => ({
  type: "SET_SELECTED_DATA",
  payload: selectedData,
});
