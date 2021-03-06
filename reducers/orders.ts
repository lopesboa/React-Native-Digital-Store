import { SET_ORDERS, GET_ORDERS, START, SUCCESS, FAIL } from '../constants';

const INITIAL_STATE = {
  items: [],
};

const orders = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${SET_ORDERS}`:
      return { ...state, items: [...action.payload] };
    case `${GET_ORDERS}${START}`:
      return { ...state, items: [] };
    case `${GET_ORDERS}${SUCCESS}`:
      return { ...state, items: [...action.payload] };
    case `${GET_ORDERS}${FAIL}`:
      return { ...state, items: [] };
    default:
      return state;
  }
};
export default orders;
