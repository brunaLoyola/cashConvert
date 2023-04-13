import React from 'react';
import { connect } from 'react-redux';
import '../css/login.css';
import PropTypes from 'prop-types';
import backgroundImage from '../imgs/backgroundLogin.png';
import { addEmail } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validation());
    console.log(name);
  };

  validation = () => {
    const { password, email } = this.state;
    const minLength = 6;
    if (password.length >= minLength && email.match(/\S+@\S+\.\S+/)) {
      return this.setState({ isDisabled: false });
    }
    this.setState({ isDisabled: true });
    console.log(password.length);
  };

  submitButton = () => {
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(addEmail(email));
    history.push('/carteira');
  };

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <>
        <img src={ backgroundImage } alt="Moedas" className="backgroundImage" />
        <div className="inputsLogin">
          <p className="textTrybe">Trybe </p>
          <p className="textWallet">Wallet</p>
          <label htmlFor="email-input">
            <input
              className="email-input"
              placeholder="Email"
              type="text"
              data-testid="email-input"
              onChange={ this.onInputChange }
              value={ email }
              name="email"
            />
          </label>
          <label htmlFor="password-input">
            <input
              className="password-input"
              placeholder="Senha"
              type="password"
              data-testid="password-input"
              onChange={ this.onInputChange }
              value={ password }
              name="password"
            />
          </label>
          <button
            className="button-enter"
            onClick={ this.submitButton }
            disabled={ isDisabled }
          >
            Entrar

          </button>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.email,
});

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps)(Login);
