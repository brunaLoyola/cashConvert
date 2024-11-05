import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;

    const total = expenses.reduce((acc, index) => {
      const subTotal = index.exchangeRates[index.currency].ask * index.value;
      return acc + subTotal;
    }, 0.00);

    return (
      <div className="header">
        <p data-testid="email-field" className="email-field">{email}</p>
        <p data-testid="total-field" className="total-field">
          {total.toFixed(2)}
        </p>
        <p
          data-testid="header-currency-field"
          className="header-currency-field"
        >
          BRL
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default connect(mapStateToProps)(Header);
