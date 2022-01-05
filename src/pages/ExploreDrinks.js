import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExploreDrinks() {
  const history = useHistory();

  async function handleOnClick() {
    const result = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((res) => res.json());

    history.push(`/bebidas/${result.drinks[0].idDrink}`);
  }

  return (
    <>
      <Header title="Explorar Bebidas" />
      <div className="explore-btns">
        <button
          data-testid="explore-by-ingredient"
          className="explore-btn"
          type="button"
          onClick={ () => history.push('/explorar/bebidas/ingredientes') }
        >
          Por Ingredientes
        </button>

        <button
          data-testid="explore-surprise"
          className="explore-btn"
          type="button"
          onClick={ handleOnClick }
        >
          Me Surpreenda!
        </button>
      </div>
      <Footer />
    </>
  );
}
