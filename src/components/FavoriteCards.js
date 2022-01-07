import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DrinksAndFoodsContext from '../context/Foods&Drinks';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function Cards(props) {
  const { id, index, alcoholicOrNot, area, category, image, name, type } = props;
  const [shareButton, setShareButton] = useState(false);
  const [favoriteButton, setFavoriteButton] = useState(true);
  const { favoritesArray, setFavorites } = useContext(DrinksAndFoodsContext);

  function handleShare() {
    setShareButton(true);
    const linkRecipe = `http://localhost:3000/${type}s/${id}`;
    navigator.clipboard.writeText(linkRecipe);
  }

  const removeFromArray = favoritesArray.filter((favorite) => favorite.id !== id);
  const removedRecipe = JSON.stringify(removeFromArray);

  function handleDislike() {
    localStorage.setItem('favoriteRecipes', removedRecipe);
    const newArray = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavoriteButton(!favoriteButton);
    setFavorites(newArray);
  }

  return (
    <div
      data-testid={ `${index}-recipe-card` }
      className="recipe-card"
    >
      <Link to={ `/${type}s/${id}` }>
        <img
          className="recipe-imgs"
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ index }
        />
        <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
        {
          type === 'comida' ? (
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              { `${area} - ${category}` }
            </p>
          )
            : <p data-testid={ `${index}-horizontal-top-text` }>{ alcoholicOrNot }</p>
        }
      </Link>
      <button
        type="button"
        index="share-btn"
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
        onClick={ handleShare }
      >
        <img src={ shareIcon } alt="Share Icon" />
      </button>
      {shareButton && <span>Link copiado!</span>}
      <button
        value={ id }
        type="button"
        id="favorite-btn"
        src={ blackHeartIcon }
        onClick={ handleDislike }
      >
        <img
          data-testid={ `${index}-horizontal-favorite-btn` }
          src={ blackHeartIcon }
          alt="Black Heart Icon"
          width="26px"
        />
      </button>
    </div>
  );
}

Cards.propTypes = {
  alcoholicOrNot: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Cards;
