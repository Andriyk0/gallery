import {combineReducers, createStore, applyMiddleware} from 'redux';
import imageReducer from '../reducers/imageReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({imageReducer});

export const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
