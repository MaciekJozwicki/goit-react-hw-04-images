import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const Modal = ({ imageObject, handleIsModalOpenChange }) => {
  const { url, alt } = imageObject;

  useEffect(() => {
    const close = e => {
      if (e.key === "Escape") {
        handleIsModalOpenChange();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className={styles.overlay} onClick={handleIsModalOpenChange}>
      <div className='modal'>
        <img className={styles.image} src={url} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imageObject: PropTypes.object,
  isModalOpel: PropTypes.bool,
  handleIsModalOpenChange: PropTypes.func,
};
export default Modal;
