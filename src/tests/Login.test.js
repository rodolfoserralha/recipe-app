import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';

const EMAIL_TESTER = 'username@email.com';
const PASSWORD_TESTER = 'senhade14chars';

const EMAIL_TESTID = 'email-input';
const PASSWORD_TESTID = 'password-input';
const BUTTON_TESTID = 'login-submit-btn';

beforeEach(() => {
  render(<Login />);
});

describe('2 - Crie todos os elementos da tela de login', () => {
  test('Tem os data-testids email-input, password-input e login-submit-btn', () => {
    const inputEmail = screen.getByTestId(EMAIL_TESTID);
    const inputPassword = screen.getByTestId(PASSWORD_TESTID);
    const buttonLogin = screen.getByTestId(BUTTON_TESTID);

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(buttonLogin).toBeInTheDocument();
  });
});

describe('3 - A pessoa deve conseguir escrever seu email na tela de login', () => {
  test('É possível escrever o email', () => {
    const inputEmail = screen.getByRole('textbox', { type: /email/i });
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveValue('');

    userEvent.type(inputEmail, EMAIL_TESTER);
    expect(inputEmail).toHaveValue(EMAIL_TESTER);
  });
});

describe('4 - A pessoa deve conseguir escrever sua senha no input de senha', () => {
  test('É possível escrever a senha', () => {
    const inputPassword = screen.getByRole('textbox', { type: /password/i });
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveValue('');

    userEvent.type(inputPassword, PASSWORD_TESTER);
    expect(inputPassword).toHaveValue(PASSWORD_TESTER);
  });
});

describe('5 - Formulário só é válido após preencher email e senha válidos', () => {
  test('O botão deve estar desativado se o email for inválido', () => {
    const inputEmail = screen.getByRole('textbox', { type: /email/i });
    const inputPassword = screen.getByRole('textbox', { type: /password/i });

    userEvent.type(inputEmail, 'wrong.email.format.com');
    userEvent.type(inputPassword, PASSWORD_TESTER);

    const buttonLogin = screen.getByTestId(BUTTON_TESTID);
    expect(buttonLogin).toBeDisabled();
  });

  test('O botão deve estar desativado se a senha tiver 6 caracteres ou menos', () => {
    const inputEmail = screen.getByRole('textbox', { type: /email/i });
    const inputPassword = screen.getByRole('textbox', { type: /password/i });

    userEvent.type(inputEmail, EMAIL_TESTER);
    userEvent.type(inputPassword, 'senha1');

    const buttonLogin = screen.getByTestId(BUTTON_TESTID);
    expect(buttonLogin).toBeDisabled();
  });

  test('O botão deve estar ativado se o email e a senha forem válidos', () => {
    const inputEmail = screen.getByRole('textbox', { type: /email/i });
    const inputPassword = screen.getByRole('textbox', { type: /password/i });
    const buttonLogin = screen.getByTestId(BUTTON_TESTID);

    userEvent.type(inputEmail, EMAIL_TESTER);
    userEvent.type(inputPassword, PASSWORD_TESTER);

    expect(buttonLogin).not.toBeDisabled();
  });
});

describe('6 - Salve tokens de meals e cocktails no localStorage após submissão,', () => {
  // O token de teste é sempre 1.
  test('Após submissão mealsToken e cocktailsToken devem estar no localStorage', () => {
    const inputEmail = screen.getByRole('textbox', { type: /email/i });
    const inputPassword = screen.getByRole('textbox', { type: /password/i });
    const buttonLogin = screen.getByTestId(BUTTON_TESTID);
    userEvent.type(inputEmail, EMAIL_TESTER);
    userEvent.type(inputPassword, PASSWORD_TESTER);
    fireEvent.click(buttonLogin);

    const mealsToken = localStorage.getItem('mealsToken');
    const cocktailsToken = localStorage.getItem('cocktailsToken');
    expect(mealsToken).toBe(1);
    expect(cocktailsToken).toBe(1);
  });
});

describe('7 - Salve o e-mail no localStorage na chave user após submissão', () => {
  // Após a submissão, o e-mail de pessoa usuária deve ser salvo em localStorage,
  // na chave user no formato { email: email-da-pessoa }.
  test('Após a submissão a chave user deve estar salva em localStorage', () => {
    const inputEmail = screen.getByTestId(EMAIL_TESTID);
    const inputPassword = screen.getByTestId(PASSWORD_TESTID);
    const buttonLogin = screen.getByTestId(BUTTON_TESTID);

    userEvent.type(inputEmail, EMAIL_TESTER);
    userEvent.type(inputPassword, PASSWORD_TESTER);
    userEvent.click(buttonLogin);

    const parsedEmail = JSON.parse(localStorage.getItem('user'));
    expect(parsedEmail.email).toBe(EMAIL_TESTER);

    // const user = JSON.parse(localStorage.getItem('user'));
    // console.log(user) => {email: 'username@email.com'}
    // console.log(user.email) => 'username@email.com'
  });
});

describe('8 - Redirecione para a tela principal após sucesso do login', () => {
  test('A rota muda para a tela principal de receitas de comidas', () => {
    const inputEmail = screen.getByTestId(EMAIL_TESTID);
    const inputPassword = screen.getByTestId(PASSWORD_TESTID);
    const buttonLogin = screen.getByTestId(BUTTON_TESTID);

    userEvent.type(inputEmail, EMAIL_TESTER);
    userEvent.type(inputPassword, PASSWORD_TESTER);
    userEvent.click(buttonLogin);
  });
});

// 7 - Salve o e-mail no localStorage na chave user após submissão
// Ref.: https://stackoverflow.com/questions/59095295/react-js-localstorage-value-object
