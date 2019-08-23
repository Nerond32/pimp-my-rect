import React from 'react';
import PropTypes from 'prop-types';
import Rectangle from 'components/generic/Rectangle/Rectangle';
import './Gallery.scss';

const Gallery = ({ images }) => {
  console.log(images);
  return (
    <div className="gallery">
      <h2>Your saved pimp&apos;d rects</h2>
      <div className="image-container">
        {images.map(image => {
          const { id, borderSize, color, height, width } = image;
          return (
            <Rectangle
              key={id}
              borderSize={borderSize}
              color={color}
              height={height}
              width={width}
            />
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
  ).isRequired
};

export default Gallery;
