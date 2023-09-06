import { ActionTypes } from '../actions/ViewTypeActions';
import { ViewTypeConst } from '../constant/constants';
import { ViewState } from '../interface/redux.interface';

const initialState: ViewState = {
  viewType: ViewTypeConst.GRID,
};

const viewReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_VIEW_TYPE:
      return {
        ...state,
        viewType: action.payload,
      };
    default:
      return state;
  }
};

export default viewReducer;
