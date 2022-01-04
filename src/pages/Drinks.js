import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import DrinkCards from '../components/DrinkCards';
import Footer from '../components/Footer';
import DrinksAndFoodsContext from '../context/Foods&Drinks';
import { drinkApiDidMount } from '../servicesContext/drinksAPI';
import DrinkCategories from '../components/DrinksCategories';

function Drinks() {
  const { drinks, setDrinks } = useContext(DrinksAndFoodsContext);

  useEffect(() => {
    drinkApiDidMount(setDrinks);
  }, [setDrinks]);

  const TWELVE = 12;
  return (
    <>
      <Header title="Bebidas" hasSearch />
      <DrinkCategories />
      <div className="parent-cards">
        { drinks && drinks.slice(0, TWELVE).map((drink, index) => (
          <DrinkCards
            key={ drink.idDrink }
            index={ index }
            idDrink={ drink.idDrink }
            strDrink={ drink.strDrink }
            strDrinkThumb={ drink.strDrinkThumb }
          />
        )) }
      </div>
      <Footer />
    </>
  );
}

export default Drinks;
