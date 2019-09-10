import React, { memo } from 'react';

const Header = () => {
  return (
    <header className="app__header">
      <div className="header__text">
        <h1>Pimp my Rect</h1>
        <h2>DELUXE EDITION</h2>
      </div>
    </header>
  );
};

export default memo(Header);
