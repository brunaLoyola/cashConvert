import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, addExpenses } from '../redux/actions/walletActions';
import { fetchEconomia } from '../services/fetchApi';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  submitButton = async () => {
    const { dispatch, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const exchangeRates = await fetchEconomia();
    const expensesArray = {
      id: expenses.length,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates,
    };

    dispatch(addExpenses(expensesArray));
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div className="wallet-form">
        <label htmlFor="value-input">
          Valor:
          <input
            value={ value }
            type="text"
            data-testid="value-input"
            name="value"
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            value={ description }
            type="text"
            data-testid="description-input"
            name="description"
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <select
            value={ currency }
            data-testid="currency-input"
            name="currency"
            onChange={ this.onInputChange }
          >
            {currencies.map((currencie) => (
              <option key={ currencie }>{currencie}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method-input">
          Método:
          <select
            value={ method }
            data-testid="method-input"
            name="method"
            onChange={ this.onInputChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Categoria:
          <select
            value={ tag }
            data-testid="tag-input"
            name="tag"
            onChange={ this.onInputChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button onClick={ this.submitButton }>Adicionar despesa</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.wallet,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
