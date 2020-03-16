// --- initial state
const initialState = {
  // la valeur courante de l'input
  isUser: false,
  isAdmin: false,
  infos: [],
};

// --- action types
export const CONNECT_USER = 'CONNECT_USER';
const DISCONNECT = 'DISCONNECT';
const IS_ADMIN = 'IS_ADMIN';
const IS_USER = 'IS_USER';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_USER:
      return {
        ...state,
        isUser: true,
        isAdmin: false,
        infos: action.value,
      };

    case IS_ADMIN:
      return {
        ...state,
        isAdmin: true,
        isUser: true,
        infos: action.value,
      };
      
    case DISCONNECT:
      return {
        ...state,
        isAdmin: false,
        isUser: false,
        infos: [],
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
export const disconnect = () => ({
  type: DISCONNECT,
});

export const isAdmin = (value) => ({
  type: IS_ADMIN,
  value,
});
export const isUser = (value) => ({
  type: IS_USER,
  value,
});

// --- export
export default reducer;
