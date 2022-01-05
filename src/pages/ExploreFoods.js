import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExploreFoods() {
  const history = useHistory();

  async function handleOnClick() {
    const result = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((res) => res.json());

    history.push(`/comidas/${result.meals[0].idMeal}`);
  }

  return (
    <>
      <Header title="Explorar Comidas" />
      <div className="explore-btns">
        <button
          data-testid="explore-by-ingredient"
          className="explore-btn"
          type="button"
          onClick={ () => history.push('/explorar/comidas/ingredientes') }
        >
          Por Ingredientes
        </button>

        <button
          data-testid="explore-by-area"
          className="explore-btn"
          type="button"
          onClick={ () => history.push('/explorar/comidas/area') }
        >
          Por Local de Origem
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
