
import { viewTypeInitialState, showTypeInitialState } from '../constant/initialize';
import { SET_VIEW_TYPE, SET_SHOW_TYPE } from '../constant/redux';

export const viewReducer = (state = viewTypeInitialState, action: any) => {
  switch (action.type) {
    case SET_VIEW_TYPE:
      return {
        ...state,
        viewType: action.payload,
      };
    default:
      return state;
  }
};

export const showTypeReducer = (state = showTypeInitialState, action: any) => {
  switch (action.type) {
    case SET_SHOW_TYPE:
      return {
        ...state,
        showType: action.payload,
      };
    default:
      return state;
  }
};