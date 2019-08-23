import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/generic/Button/Button';
import Rectangle from 'components/generic/Rectangle/Rectangle';
import './Gallery.scss';

const Gallery = ({ images, deleteImage }) => {
  return (
    <div className="gallery">
      <h2>Your saved pimp&apos;d rects</h2>
      <div className="gallery-container">
        {images.map(image => {
          const { id, borderSize, color, height, width } = image;
          return (
            <div className="image-container" key={id}>
              <Rectangle
                borderSize={borderSize}
                color={color}
                height={height}
                width={width}
              />
              <Button onClick={() => deleteImage(id)}>X</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      borderSize: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired
    })
  ).isRequired,
  deleteImage: PropTypes.func.isRequired
};

export default Gallery;
