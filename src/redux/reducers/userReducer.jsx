const initialState = {
  username: '',
  password: '',
  isAuthenticated: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'REGISTER_USER': {
      const newUser = { ...state, ...action.payload, isAuthenticated: false };
      localStorage.setItem('user', JSON.stringify(newUser)); // Store the user data in localStorage
      return newUser;
    }
    case 'LOGIN_USER': {
      const savedUser = JSON.parse(localStorage.getItem('user'));
      if (
        savedUser &&
        savedUser.username === action.payload.username &&
        savedUser.password === action.payload.password
      ) {
        return { ...savedUser, isAuthenticated: true };
      }
      return { ...state, isAuthenticated: false }; // Invalid login
    }
    case 'LOGOUT_USER':
      return { ...state, isAuthenticated: false };
    case 'LOAD_USER':
      return action.payload;
    default:
      return state;
  }
}

export default userReducer;
