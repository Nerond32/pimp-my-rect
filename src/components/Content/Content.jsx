import React, { memo } from 'react';
import './Content.scss';
import Editor from './Editor/Editor';
import Output from './Output/Output';

const Content = () => {
  return (
    <div>
      <Editor />
    </div>
  );
};

export default memo(Content);
