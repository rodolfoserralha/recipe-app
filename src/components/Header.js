import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header(props) {
  const { title, hasSearch } = props;

  const [searchInput, setSearchInput] = useState(false);

  function showSearchInput() {
    setSearchInput(!searchInput);
  }

  return (
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
      <div className="headerInput">
        { searchInput && (
          <input
            type="text"
            data-testid="search-input"
            placeholder="Pesquisar"
          />) }
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  hasSearch: PropTypes.bool.isRequired,
};
