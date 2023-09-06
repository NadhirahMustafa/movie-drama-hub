import { ShowActionTypes } from "../actions/ShowTypeAction";
import { ShowState } from "../interface/redux.interface";
import { ShowTypeConst, ViewTypeConst } from "../constant/constants";

const initialState: ShowState = {
  showType: ShowTypeConst.MOVIE,
};

const showTypeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ShowActionTypes.SET_SHOW_TYPE:
      return {
        ...state,
        showType: action.payload,
      };
    default:
      return state;
  }
};

export default showTypeReducer;
