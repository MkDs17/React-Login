// import npm : createStore
import { createStore, applyMiddleware, compose } from 'redux';

// import reducer(s)
import reducer from './reducer';

import loginMiddleWare from './middlewares/loginMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Améliorations pour le store
const enhancers = composeEnhancers(
  applyMiddleware(
    loginMiddleWare,
  ),
);

// Création du store
const store = createStore(
  reducer,
  enhancers,
);

// Export
export default store;
