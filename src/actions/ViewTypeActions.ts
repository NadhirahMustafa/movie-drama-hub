export const ActionTypes = {
    SET_VIEW_TYPE: 'SET_VIEW_TYPE',
  };
  
  export const setViewType = (viewType: string) => ({
    type: ActionTypes.SET_VIEW_TYPE,
    payload: viewType,
  });