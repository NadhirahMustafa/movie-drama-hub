export const ViewActionTypes = {
    SET_VIEW_TYPE: 'SET_VIEW_TYPE',
  };
  
  export const setViewType = (viewType: string) => ({
    type: ViewActionTypes.SET_VIEW_TYPE,
    payload: viewType,
  });