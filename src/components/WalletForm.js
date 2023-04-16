import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../redux/actions/walletActions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <label htmlFor="value-input">
          Valor:
          <input type="number" min="0" data-testid="value-input" />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input type="text" data-testid="description-input" />
        </label>
        <select data-testid="currency-input">
          Moeda:
          {
            currencies.map((currencie) => (
              <option key={ currencie }>{currencie}</option>
            ))
          }
        </select>
        <select data-testid="method-input">
          Método:
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select data-testid="tag-input">
          Método:
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.wallet,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
