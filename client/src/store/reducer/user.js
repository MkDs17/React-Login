// --- initial state
const initialState = {
  // la valeur courante de l'input
  isUser: false,
  name: '',
};

// --- action types
export const CONNECT_USER = 'CONNECT_USER';
const IS_USER = 'IS_USER';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_USER:
      return {
        ...state,
        isUser: true,
        name: action.value,
      };

    default: return state;
  }
};

// --- action creators
export const connectUser = (username, password) => ({
  type: CONNECT_USER,
  username,
  password,
});

// --- action creators
export const isUser = (value) => ({
  type: IS_USER,
  value,
});

// --- export
export default reducer;
