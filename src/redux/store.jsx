// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import cartReducer from './reducers/cartReducer';
import productsReducer from './reducers/productsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
});

const store = createStore(rootReducer);
export default store;