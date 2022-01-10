import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import Forms from './Forms';

function Header(props) {
  const { title, hasSearch } = props;

  const [displayInput, setDisplayInput] = useState(false);

  function showSearchInput() {
    setDisplayInput(!displayInput);
  }

  return (
    <>
      <header>
        <div className="headerIcon">
          <Link to="/perfil">
            <img data-testid="profile-top-btn" src={ profileIcon } alt="Profile Icon" />
          </Link>
          <h1 id="page-title" data-testid="page-title">{ title }</h1>
          { hasSearch && (
            <button
              id="searchInput"
              type="button"
              onClick={ showSearchInput }
            >
              <img src={ searchIcon } data-testid="search-top-btn" alt="Search Icon" />
            </button>
          ) }
        </div>
      </header>

      { displayInput && <Forms title={ title } /> }
    </>
  );
}

Header.propTypes = {
  hasSearch: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
