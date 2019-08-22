import React, { memo } from 'react';
import './Content.scss';
import Editor from './Editor/Editor';
import Gallery from './Gallery/Gallery';
import Output from './Output/Output';

const Content = () => {
  return (
    <div className="content">
      <Editor />
      <Output />
      <Gallery />
    </div>
  );
};

export default memo(Content);
