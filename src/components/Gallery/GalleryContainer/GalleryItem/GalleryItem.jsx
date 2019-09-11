import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Button from 'components/generic/Button/Button';
import Rectangle from 'components/generic/Rectangle/Rectangle';

export const GalleryItem = ({ rect, deleteImage }) => {
  const { id, borderSize, borderColor, color, height, width } = rect;
  const [isBeingDeleted, setIsBeingDeleted] = useState(false);
  useEffect(() => {
    setIsBeingDeleted(true);
  }, []);
  return (
    <CSSTransition
      in={isBeingDeleted}
      timeout={300}
      classNames="c-gallery-item"
    >
      <div className="c-gallery-item__container">
        <span className="c-gallery-item__size--label">
          {2 * borderSize + width}x{2 * borderSize + height}
        </span>
        <div className="c-gallery-item__rect">
          <Rectangle
            borderSize={borderSize}
            borderColor={borderColor}
            color={color}
            height={height}
            width={width}
          />{' '}
        </div>
        <Button
          classNames="c-gallery-item__button-delete"
          onClick={() => {
            setIsBeingDeleted(false);
            setTimeout(() => {
              deleteImage(id);
            }, 300);
          }}
        >
          X
        </Button>
      </div>
    </CSSTransition>
  );
};

GalleryItem.propTypes = {
  rect: PropTypes.shape({
    id: PropTypes.string.isRequired,
    borderSize: PropTypes.number.isRequired,
    borderColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }).isRequired,
  deleteImage: PropTypes.func.isRequired
};

export default memo(GalleryItem);
