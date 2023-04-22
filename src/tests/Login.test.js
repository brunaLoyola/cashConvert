import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

const email = 'trybe@trybe.com';
const senha = '123456';
const testidEmail = 'email-input';
const testidSenha = 'password-input';

describe('Testando o componente <App.js />', () => {
  it('Deve testar se o texto Trybe Wallet está na tela ', () => {
    renderWithRouterAndRedux(<App />);

    const trybe = screen.getByText(/Trybe/i);
    const wallet = screen.getByText(/Wallet/i);
    expect(trybe).toBeInTheDocument();
    expect(wallet).toBeInTheDocument();
  });
  it('Deve testar se os inputs de email e senha estão na tela', () => {
    renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId(testidEmail);
    expect(emailInput).toBeInTheDocument();

    const senhaInput = screen.getByTestId(testidSenha);
    expect(senhaInput).toBeInTheDocument();
  });

  it('Deve testar se ao clicar no botão de Entrar, a aplicação é redirecionada para a página Wallet, na URL /carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId(testidEmail);
    const senhaInput = screen.getByTestId(testidSenha);
    const buttonEntrar = screen.getByRole('button', { name: /Entrar/i });
    expect(buttonEntrar).toBeInTheDocument();

    userEvent.type(emailInput, email);
    userEvent.type(senhaInput, senha);
    userEvent.click(buttonEntrar);

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});
