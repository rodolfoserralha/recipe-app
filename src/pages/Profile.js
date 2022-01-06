import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Profile() {
  const { email } = (JSON.parse(localStorage.getItem('user')));
  const history = useHistory();

  function handleLogout() {
    history.push('/');
    localStorage.clear();
  }

  return (
    <>
      <Header title="Perfil" />
      <div className="parent-cards">
        <h2 data-testid="profile-email">{ email }</h2>

        <button
          className="explore-btn"
          data-testid="profile-done-btn"
          type="button"
          onClick={ () => history.push('/receitas-feitas') }
        >
          Receitas Feitas
        </button>

        <button
          data-testid="profile-favorite-btn"
          className="explore-btn"
          type="button"
          onClick={ () => history.push('/receitas-favoritas') }
        >
          Receitas Favoritas
        </button>

        <button
          data-testid="profile-logout-btn"
          className="explore-btn"
          type="button"
          onClick={ handleLogout }
        >
          Sair
        </button>
      </div>
      <Footer />
    </>
  );
}
