import { combineReducers } from 'redux';

// j'importe mes reducers
import user from './user';

// je veux combiner mes reducers en un seul, puisque le store gère un seul reducer
const reducer = combineReducers({
  user,
});

export default reducer;
