export const ShowActionTypes = {
  SET_SHOW_TYPE: "SET_SHOW_TYPE",
};

export const setShowType = (showType: string) => ({
  type: ShowActionTypes.SET_SHOW_TYPE,
  payload: showType,
});
