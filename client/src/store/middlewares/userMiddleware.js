import axios from 'axios';
import addNotification from '../addNotification';
import { GET_ALL_USERS, GET_ONE_USER, CHANGE_USER_SETTINGS, ADMIN_EDIT_USER_SETTINGS, getAllUsers, updateUsersArray, getOneUser, updateUserInfosArray } from '../reducer/user';

const userMiddleware = (store) => (next) => (action) => {
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
          store.dispatch(updateUserInfosArray(response.data))
        })
        .catch((error) => {
          console.log('Houston ? We got trouble', error);
        });

      break;
    }

    case CHANGE_USER_SETTINGS: {
      const token = localStorage.getItem('token');
      const { id, name, designation } = action.value

      axios({
        method: 'patch',
        url: `api/users/${id}`,
        headers: { 
          'Content-Type': 'application/json', 
          'auth': token,
        },
        data: {
          name,
          designation
        }
      })
        .then((response) => {
          addNotification('modify-success');
          store.dispatch(getOneUser(id))
        })
        .catch((error) => {
          addNotification('modify-error');
          console.log('Houston ? We got trouble', error);
        });

      break;
    }

    case ADMIN_EDIT_USER_SETTINGS: {
      const actualUserId = store.getState().user.infos.id
      const token = localStorage.getItem('token')
      const { id, name, designation, role, company } = action.value
      
      axios({
        method: 'patch',
        url: `api/users/${id}/admin`,
        headers: { 
          'Content-Type': 'application/json', 
          'auth': token,
        },
        data: {
          name,
          designation,
          role,
          company
        }
      })
        .then((response) => {
          addNotification('modify-success');
          /* If id of user's modifying = id actual user (admin), we using getOneUser() method to update redux state of actual user, if the settings to modify is not Admin's so you can use getAllUsers() method to get new array of your users */
          { id === actualUserId ? store.dispatch(getOneUser(id)) : store.dispatch(getAllUsers()) }
        })
        .catch((error) => {
          addNotification('modify-error');
          console.log('Houston ? We got trouble', error);
        });

      break;
    }

    default: {
      next(action);
    }
  }
};

export default userMiddleware;
