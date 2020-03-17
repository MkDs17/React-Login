// --- initial state
const initialState = {
  // la valeur courante de l'input
  isUser: false,
  isAdmin: false,
  infos: [],
  allUsers: [],
};

// --- action types
export const CONNECT_USER = 'CONNECT_USER';
const DISCONNECT = 'DISCONNECT';

const IS_ADMIN = 'IS_ADMIN';
const IS_USER = 'IS_USER';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ONE_USER = 'GET_ONE_USER';
const UPDATE_USERS_ARRAY = 'UPDATE_USERS_ARRAY';

export const CHANGE_USER_SETTINGS = 'CHANGE_USER_SETTINGS';
const UPDATE_USER_INFOS_ARRAY = 'UPDATE_USER_INFOS_ARRAY';

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

    case UPDATE_USERS_ARRAY:
      return {
        ...state,
        allUsers: action.value,
      };

    case UPDATE_USER_INFOS_ARRAY:
      return {
        ...state,
        infos: action.value,
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

export const getAllUsers = () => ({
  type: GET_ALL_USERS,
})
export const getOneUser = (value) => ({
  type: GET_ONE_USER,
  value,
})
export const updateUsersArray = (value) => ({
  type: UPDATE_USERS_ARRAY,
  value,
})

export const changeUserSettings = (value) => ({
  type: CHANGE_USER_SETTINGS,
  value,
})
export const updateUserInfosArray = (value) => ({
  type: UPDATE_USER_INFOS_ARRAY,
  value,
})

// --- export
export default reducer;
