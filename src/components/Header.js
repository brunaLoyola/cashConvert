import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, total } = this.props;
    return (
      <div>
        <p data-testid="email-field" className="email-field">{email}</p>
        <p data-testid="total-field" className="total-field">
          Total:
          { total }
        </p>
        <p
          data-testid="header-currency-field"
          className="header-currency-field"
        >
          {' '}
          BRL
          {' '}

        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
