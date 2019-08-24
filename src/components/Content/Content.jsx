import React, { memo } from 'react';

import './Content.scss';
import Editor from './Editor/Editor';
import Gallery from './Gallery/Gallery';

const Content = () => {
  return (
    <div className="content">
      <Editor />
      <Gallery />
    </div>
  );
};

export default memo(Content);
