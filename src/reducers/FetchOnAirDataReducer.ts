import {
  FETCH_ON_AIR_DATA_REQUEST,
  FETCH_ON_AIR_DATA_SUCCESS,
  FETCH_ON_AIR_DATA_FAILURE,
} from "../actions/FetchOnAirDataAction";
import { fetchDataInitialState } from "../constant/initialize";

const fetchDataReducer = (state = fetchDataInitialState, action: any) => {
  switch (action.type) {
    case FETCH_ON_AIR_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_ON_AIR_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        totalPages: action.totalPages,
        isLoading: false,
        page: state.page + 1,
      };
    case FETCH_ON_AIR_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default fetchDataReducer;
