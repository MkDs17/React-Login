// --- initial state
const initialState = {
  allCompanies: [],
};

// --- action types
export const GET_ALL_COMPANIES = 'GET_ALL_COMPANIES';
const UPDATE_COMPANIES_ARRAY = 'UPDATE_COMPANIES_ARRAY';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_COMPANIES_ARRAY:
      return {
        ...state,
        allCompanies: action.value,
      };
    
    default: return state;
  }
};

// --- action creators

export const getAllCompanies = () => ({
  type: GET_ALL_COMPANIES,
})
export const updateCompaniesArray = (value) => ({
  type: UPDATE_COMPANIES_ARRAY,
  value,
})

// --- export
export default reducer;
