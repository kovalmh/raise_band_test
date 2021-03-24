import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header/Header';

export default function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Header />
          </div>
      </Provider>
  );
}