import React from 'react';
import PropTypes from 'prop-types';
import Rectangle from 'components/generic/Rectangle/Rectangle';

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map(image => {
        const { id, borderSize, color, size } = image;
        return (
          <Rectangle
            key={id}
            borderSize={borderSize}
            color={color}
            size={size}
          />
        );
      })}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      borderSize: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Gallery;
