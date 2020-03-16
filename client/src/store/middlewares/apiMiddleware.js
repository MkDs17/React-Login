import axios from 'axios';
import { GET_ALL_USERS, updateUsersArray } from '../reducer/user';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_USERS: {

      axios({
        method: 'get',
        url: 'api/users',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          store.dispatch(updateUsersArray(response.data))
        })
        .catch((error) => {
          console.log('Houston ? We got trouble', error);
        });

      break;
    }
    default: {
      next(action);
    }
  }
};

export default apiMiddleware;
