import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store/store';
import Header from 'components/Header/Header';
import Editor from 'components/Editor/Editor';
import Gallery from 'components/Gallery/Gallery';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Editor />
          <Gallery />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
