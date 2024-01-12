import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

export const Searchbar = ({ handleSearchValueChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    handleSearchValueChange(inputValue);
  };

  return (
    <div className={styles.searchbar}>
      <header>
        <form onSubmit={onSubmit}>
          <button type="submit" className={styles.button}>
            <span className="button-label">Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleInputChange}
          />
        </form>
      </header>
    </div>
  );
};

Searchbar.propTypes = {
  handleSearchValueChange: PropTypes.func,
};

export default Searchbar;
