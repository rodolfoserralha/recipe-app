// import React, { useState } from 'react';
// import Header from '../components/Header';

// export default function FavoriteRecipes() {
//   const favoritesArray = JSON.parse(localStorage.getItem('favoriteRecipes'));
//   const [favorites, setFavorites] = useState(favoritesArray);

//   function showAll() {
//     setFavorites(favoritesArray);
//   }

//   function justFood() {
//     const justFoodArray = favoritesArray.filter((favorite) => favorite.type === 'comida');
//     setFavorites(justFoodArray);
//   }
//   function justDrinks() {
//     const justDrinksArray = favoritesArray
//       .filter((favorite) => favorite.type === 'bebidas');
//     setFavorites(justDrinksArray);
//   }

//   return (
//     <>
//       <Header title="Receitas Favoritas" />
//       <div>
//         <button
//           type="button"
//           data-testid="filter-by-all-btn"
//           onClick={ showAll }
//         >
//           All
//         </button>
//         <button
//           type="button"
//           data-testid="filter-by-food-btn"
//           onClick={ justFood }
//         >
//           Food
//         </button>
//         <button
//           type="button"
//           data-testid="filter-by-drink-btn"
//           onClick={ justDrinks }
//         >
//           Drinks
//         </button>
//       </div>
//     </>
//   );
// }
