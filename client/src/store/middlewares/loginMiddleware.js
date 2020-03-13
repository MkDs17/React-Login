import axios from 'axios';
/* import addNotification from '../addNotification'; */
import { CONNECT_USER, isAdmin } from '../reducer/user';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_USER: {

      const {
        username,
        password,
      } = action;

      console.log(action)

      /* axios({
        method: 'post',
        url: 'http://api.mr-webdev.com/api/login',
        headers: { 'Content-Type': 'application/json' },
        data: {
          username,
          password,
        },
      })
        .then((response) => {
          addNotification('login-success');
          store.dispatch(isAdmin(response.data.username));
          localStorage.setItem('token', response.data.token);
        })
        .catch((error) => {
          addNotification('login-error');
          console.log('Houston ? We got trouble', error);
        }); */

      break;
    }
    default: {
      next(action);
    }
  }
};

export default loginMiddleware;
