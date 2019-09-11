import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, classNames, withBorder, onClick, type }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={`c-button ${classNames} ${
        withBorder ? 'c-button--with-border' : ''
      }`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  withBorder: false,
  classNames: '',
  onClick: () => {},
  type: 'button'
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  withBorder: PropTypes.bool,
  classNames: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;
