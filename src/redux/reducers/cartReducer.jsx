// src/redux/reducers/cartReducer.js
const initialState = [];

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        const updatedCart = state.map((item, index) =>
          index === itemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      }
      const newCart = [
        ...state,
        { ...action.payload, uniqueKey: `${action.payload.id}-${Date.now()}`, quantity: 1 },
      ];
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    }
    case 'REMOVE_FROM_CART': {
      const updatedCart = state.filter(
        (item) => item.uniqueKey !== action.payload.uniqueKey
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    }
    case 'UPDATE_CART_QUANTITY': {
      const updatedCart = state.map((item) =>
        item.uniqueKey === action.payload.uniqueKey
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    }
    case 'LOAD_CART':
      return action.payload;
    default:
      return state;
  }
}


export default cartReducer;