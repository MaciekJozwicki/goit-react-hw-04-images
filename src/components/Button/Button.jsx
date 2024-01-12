import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ handleIncrementPage }) => {
  return (
    <button className={styles.loadMore} onClick={handleIncrementPage}>
      Load more
    </button>
  );
};

Button.propTypes = {
  handleIncrementPage: PropTypes.func,
};
export default Button;
