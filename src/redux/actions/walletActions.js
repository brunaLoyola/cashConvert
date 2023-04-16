import { ADD_CURRENCIES, SOLICIT } from './index';

export const addCurrencies = (currencies) => ({
  type: ADD_CURRENCIES,
  currencies,
});

export const solicit = () => ({
  type: SOLICIT,
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(solicit());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const newCurrencies = Object.keys(data).filter((item) => item !== 'USDT');
  return dispatch(addCurrencies(newCurrencies));
};
