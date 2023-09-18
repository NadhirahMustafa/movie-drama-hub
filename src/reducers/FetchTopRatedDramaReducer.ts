import {
    FETCH_TOP_RATED_DRAMA_DATA_REQUEST,
    FETCH_TOP_RATED_DRAMA_DATA_SUCCESS,
    FETCH_TOP_RATED_DRAMA_DATA_FAILURE,
  } from "../actions/FetchTopRatedDramaAction";
  import { fetchDataInitialState } from "../constant/initialize";
  
  const fetchTopRatedDramaDataReducer = (
    state = fetchDataInitialState,
    action: any
  ) => {
    switch (action.type) {
      case FETCH_TOP_RATED_DRAMA_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case FETCH_TOP_RATED_DRAMA_DATA_SUCCESS:
        return {
          ...state,
          data: action.payload,
          totalPages: action.totalPages,
          isLoading: false,
          page: state.page + 1,
        };
      case FETCH_TOP_RATED_DRAMA_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default fetchTopRatedDramaDataReducer;
  