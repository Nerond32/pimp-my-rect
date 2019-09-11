import React, { memo } from 'react';

const Header = () => {
  return (
    <header className="c-header">
      <div className="c-header__text-container">
        <h1 className="c-header__main-text">Pimp my Rect</h1>
        <h2 className="c-header__secondary-text">DELUXE EDITION</h2>
      </div>
    </header>
  );
};

export default memo(Header);
