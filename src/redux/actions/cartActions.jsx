// src/redux/actions/cartActions.js
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});