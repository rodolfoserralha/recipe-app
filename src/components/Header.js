import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import { requestApiThunk } from '../services';

function Header(props) {
  const { title, hasSearch, dispatchFood } = props;
  // const { foods } = this.props;

  const [displayInput, setDisplayInput] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchRadioValue, setSearchRadioValue] = useState('');

  function showSearchInput() {
    setDisplayInput(!displayInput);
  }

  function onClickBtn(e) {
    e.preventDefault();

    if (searchText.length > 1 && searchRadioValue === 'Primeira Letra') {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    } else {
      dispatchFood(searchRadioValue, searchText);
    }
  }

  return (
    <>
      <header>

        <div className="headerIcon">
          <Link to="/perfil">
            <img data-testid="profile-top-btn" src={ profileIcon } alt="Profile Icon" />
          </Link>
          <h1 data-testid="page-title">{ title }</h1>
          { hasSearch && (
            <button
              id="searchInput"
              imageUrl={ searchIcon }
              type="button"
              onClick={ showSearchInput }
            >
              <img src={ searchIcon } data-testid="search-top-btn" alt="Search Icon" />
            </button>
          ) }
        </div>

      </header>

      <div className="formulary">
        { displayInput && (
          <input
            id="search-input-text"
            type="text"
            data-testid="search-input"
            placeholder="Pesquisar"
            onChange={ (e) => setSearchText(e.target.value) }
          />) }

        <form onChange={ (e) => setSearchRadioValue(e.target.value) }>
          <label htmlFor="ingredient-input">
            <input
              id="ingredient-input"
              className="radio-inputs"
              type="radio"
              data-testid="ingredient-search-radio"
              name="search-bar"
              value="Ingrediente"
            />
            Ingrediente
          </label>

          <label htmlFor="name-input">
            <input
              id="name-input"
              className="radio-inputs"
              type="radio"
              data-testid="name-search-radio"
              name="search-bar"
              value="Nome"
            />
            Nome
          </label>

          <label htmlFor="letter-input">
            <input
              id="letter-input"
              className="radio-inputs"
              type="radio"
              data-testid="first-letter-search-radio"
              name="search-bar"
              value="Primeira Letra"
            />
            Primeira Letra
          </label>

          <button
            id="search-button"
            data-testid="exec-search-btn"
            type="button"
            onClick={ onClickBtn }
          >
            Buscar
          </button>
        </form>
      </div>
    </>
  );
}

Header.propTypes = {
  dispatchFood: PropTypes.func.isRequired,
  hasSearch: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.foodsReducer.foods,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFood: (searchRadioValue, searchText) => (
    dispatch(requestApiThunk(searchRadioValue, searchText))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
