import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/store';
import Content from 'components/Content/Content';
import Header from 'components/Header/Header';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <Content />
      </Provider>
    </div>
  );
}

export default App;
