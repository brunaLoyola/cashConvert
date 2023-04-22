import { ADD_CURRENCIES, ADD_EXPENSES, SOLICIT, DELETE_DESPESA } from '../actions';

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
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case DELETE_DESPESA:
    return {
      ...state,
      expenses: [...action.newExpenses],
    };
  default:
    return state;
  }
};

export default wallet;
