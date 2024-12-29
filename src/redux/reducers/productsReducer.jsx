// src/redux/reducers/productsReducer.js
const initialState = [
  { id: 1, name: 'PikaCard', price: 29.99, image: '/images/pika.jpg', description: 'Description for PikaCard' },
  { id: 2, name: 'BulbCard', price: 39.99, image: '/images/bulb.jpg', description: 'Description for BulbCard' },
  { id: 3, name: 'ChariCard', price: 49.99, image: '/images/chari.jpg', description: 'Description for ChariCard' },
];

function productsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default productsReducer;