import axios from 'axios';
import { GET_ALL_USERS, GET_ONE_USER, updateUsersArray, CHANGE_USER_SETTINGS, getOneUser, updateUserInfosArray } from '../reducer/user';

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

    case GET_ONE_USER: {
      const id = action.value

      axios({
        method: 'get',
        url: `api/users/${id}`,
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          console.log('response from GET_ONE_USER:', response)
          store.dispatch(updateUserInfosArray(response.data))
        })
        .catch((error) => {
          console.log('Houston ? We got trouble', error);
        });

      break;
    }

    case CHANGE_USER_SETTINGS: {
      const token = localStorage.getItem('token');
      const { id, name, designation, role, company } = action.value

      axios({
        method: 'patch',
        url: `api/users/${id}`,
        headers: { 
          'Content-Type': 'application/json', 
          'auth': token,
        },
        data: {
          name,
          designation,
          role,
          companyId: 7
        }
      })
        .then((response) => {
          store.dispatch(getOneUser(id))
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
