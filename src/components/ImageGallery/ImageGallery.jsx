import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  const [imageObject, setImageObject] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalImage = image => {
    const imageObjectSchema = {
      url: image.largeImageURL,
      alt: image.tags,
    };

    setImageObject(imageObjectSchema);
  };

  const handleIsModalOpenChange = () => {
    setIsModalOpen(!isModalOpen);
  };
 
  return (
    <>
      <ul className={styles.gallery}>
        {images?.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              image={image}
              handleModalImage={handleModalImage}
              handleIsModalOpenChange={handleIsModalOpenChange}
            />
          );
        })}
      </ul>
      {isModalOpen && (
        <Modal
          handleIsModalOpenChange={handleIsModalOpenChange}
          imageObject={imageObject}
          isModalOpen={isModalOpen}
        />
      )}
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
};

export default ImageGallery;
