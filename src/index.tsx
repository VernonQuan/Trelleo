import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'react-responsive-modal/styles.css';
import { store } from './store/rootReducer';
import Board from './components/board/Board';
import './index.css';

render(
  <StrictMode>
    <Provider store={store}>
      <Board />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
