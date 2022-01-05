import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Explore() {
  const history = useHistory();

  return (
    <>
      <Header title="Explorar" />
      <div className="explore-btns">
        <button
          data-testid="explore-food"
          className="explore-btn"
          type="button"
          onClick={ () => history.push('/explorar/comidas') }
        >
          Explorar Comidas
        </button>

        <button
          data-testid="explore-drinks"
          className="explore-btn"
          type="button"
          onClick={ () => history.push('/explorar/bebidas') }
        >
          Explorar Bebidas
        </button>
      </div>
      <Footer />
    </>
  );
}
