// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Header from '../components/Header';
// import shareIcon from '../images/shareIcon.svg';

// export default function RecipeDone(props) {
//   const { match: { url } } = props;
//   const favoritesArray = JSON.parse(localStorage.getItem('favoriteRecipes'));
//   const [favorites, setFavorites] = useState(favoritesArray);
//   const [shareButton, setShareButton] = useState(false);

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

//   function handleShare() {
//     setShareButton(true);
//     const linkRecipe = `http://localhost:3000${url}`;
//     navigator.clipboard.writeText(linkRecipe);
//   }

//   return (
//     <>
//       <Header title="Receitas Feitas" />
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
//         <div>
//           <img
//             scr=""
//             alt="Foto ilustrativa"
//             data-testid="${index}-horizontal-image"
//           />
//           <span data-testid="${index}-horizontal-top-text">categoria</span>
//           <span data-testid="${index}-horizontal-name">nome</span>
//           <span data-testid="${index}-horizontal-done-date">datafinalizada</span>
//           <button
//             type="button"
//             id="share-btn"
//             data-testid="share-btn"
//             onClick={ handleShare }
//           >
//             <img src={ shareIcon } alt="Share Icon" />
//           </button>
//           {shareButton && <span>Link copiado!</span>}
//           <span data-testid="${index}-${tagName}-horizontal-tag">tags</span>
//         </div>
//       </div>
//     </>
//   );
// }

// RecipeDone.propTypes = {
//   match: PropTypes.objectOf({
//     url: PropTypes.string.isRequired,
//   }).isRequired,
// };
