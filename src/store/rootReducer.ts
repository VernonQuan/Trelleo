import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AppActions } from '../components/board/types';
import listReducer from '../components/list/reducers';

export const rootReducer = combineReducers({
  board: listReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>));
