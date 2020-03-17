// import npm : createStore
import { createStore, applyMiddleware, compose } from 'redux';

// import reducer(s)
import reducer from './reducer';

import loginMiddleWare from './middlewares/loginMiddleware';
import userMiddleWare from './middlewares/userMiddleware';
import companyMiddleWare from './middlewares/companyMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Améliorations pour le store
const enhancers = composeEnhancers(
  applyMiddleware(
    loginMiddleWare,
    userMiddleWare,
    companyMiddleWare,
  ),
);

// Création du store
const store = createStore(
  reducer,
  enhancers,
);

// Export
export default store;
