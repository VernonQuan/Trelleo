import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/board/Board';
import { Provider } from 'react-redux';
import { store } from './store/rootReducer';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Board />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
