import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({
  image,
  handleIsModalOpenChange,
  handleModalImage,
}) => {
  const handleModalOpen = () => {
    handleModalImage(image);
    handleIsModalOpenChange();
  };

  const { webformatURL, id, tags } = image;

  return (
    <li className={styles.item} key={id} onClick={handleModalOpen}>
      <img className={styles.photo} src={webformatURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
  handleModalImage: PropTypes.func,
  handleIsModalOpenChange: PropTypes.func,
};
export default ImageGalleryItem;
