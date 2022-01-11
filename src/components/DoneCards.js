import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

function Cards(props) {
  const { id,
    index, alcoholicOrNot, area, category, date, image, name, tags, type } = props;
  const [shareButton, setShareButton] = useState(false);

  function handleShare() {
    setShareButton(true);
    const linkRecipe = `http://localhost:3000/${type}s/${id}`;
    navigator.clipboard.writeText(linkRecipe);
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
        <p data-testid={ `${index}-horizontal-done-date` }>{ date }</p>
        {
          tags.map((tag) => (
            <p key={ tag } data-testid={ `${index}-${tag}-horizontal-tag` }>{ tag }</p>))
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
    </div>
  );
}

Cards.propTypes = {
  alcoholicOrNot: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf.isRequired,
  type: PropTypes.string.isRequired,
};

export default Cards;
