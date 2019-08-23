import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store/store';
import Content from 'components/Content/Content';
import Header from 'components/Header/Header';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Content />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
