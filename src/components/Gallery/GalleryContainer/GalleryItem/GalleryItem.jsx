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
      classNames="item__transition"
    >
      <div className="item__container">
        <span className="container__rect-size-label">
          {2 * borderSize + width}x{2 * borderSize + height}
        </span>
        <div className="container__rect">
          <Rectangle
            borderSize={borderSize}
            borderColor={borderColor}
            color={color}
            height={height}
            width={width}
          />{' '}
        </div>
        <Button
          classNames="container__delete-item-button"
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
