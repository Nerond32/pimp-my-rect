import React, { memo } from 'react';

const Header = () => {
  return (
    <header className="pmr-main-header">
      <div className="pmr-main-header-text">
        <h1>Pimp my Rect</h1>
        <h2>DELUXE EDITION</h2>
      </div>
    </header>
  );
};

export default memo(Header);
