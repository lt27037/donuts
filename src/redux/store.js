import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import shopReducer from './shopReducer';

const store = createStore(shopReducer, applyMiddleware(thunk));

export default store;