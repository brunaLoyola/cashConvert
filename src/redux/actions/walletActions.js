import { fetchEconomia } from '../../services/fetchApi';
import { ADD_CURRENCIES, SOLICIT, ADD_EXPENSES, DELETE_DESPESA } from './index';

export const addCurrencies = (currencies) => ({
  type: ADD_CURRENCIES,
  currencies,
});

export const solicit = () => ({
  type: SOLICIT,
});

export const addExpenses = (expenses) => ({
  type: ADD_EXPENSES,
  expenses,
});
export const deleteDespesa = (newExpenses) => ({
  type: DELETE_DESPESA,
  newExpenses,
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(solicit());
  const data = await fetchEconomia();
  const newCurrencies = Object.keys(data).filter((item) => item !== 'USDT');
  return dispatch(addCurrencies(newCurrencies));
};
