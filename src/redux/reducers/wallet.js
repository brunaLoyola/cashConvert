import { ADD_CURRENCIES, SOLICIT } from '../actions';

export const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  total: 0,

};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SOLICIT: return {
    ...state,
  };
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default wallet;
