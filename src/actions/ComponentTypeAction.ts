import { SET_SHOW_TYPE, SET_VIEW_TYPE } from "../constant/redux";

export const setShowType = (showType: string) => ({
  type: SET_SHOW_TYPE,
  payload: showType,
});
export const setViewType = (viewType: string) => ({
  type: SET_VIEW_TYPE,
  payload: viewType,
});
