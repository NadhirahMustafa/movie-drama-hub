import { DataState, selectedDataAction } from "../interface/redux.interface";

const initialState: DataState = {
  selectedData: {
    adult: false,
    backdrop_path: "",
    genre_ids: [],
    id: 0,
    original_language: "",
    original_name: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    release_date: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
    media_type: ''
  },
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
