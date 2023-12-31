import { fetchDataInitialState } from "./initialize";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const SET_SELECTED_DATA = "SET_SELECTED_DATA";
export const SET_SHOW_TYPE = "SET_SHOW_TYPE";
export const SET_VIEW_TYPE = "SET_VIEW_TYPE";

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data: any, totalPages: number) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
  totalPages: totalPages,
});

export const fetchDataFailure = (error: any) => ({
  type: FETCH_DATA_FAILURE,
  error,
});

export const selectedDataType = (selectedData: any) => ({
  type: SET_SELECTED_DATA,
  payload: selectedData,
})

export const dataReducer = (
    state = fetchDataInitialState,
    action: any
  ) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          data: action.payload,
          totalPages: action.totalPages,
          isLoading: false,
          page: state.page + 1,
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }