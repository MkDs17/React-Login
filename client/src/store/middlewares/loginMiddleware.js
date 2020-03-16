import axios from 'axios';
import addNotification from '../addNotification';
import { CONNECT_USER, isAdmin, isUser } from '../reducer/user';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_USER: {

      const {
        username,
        password,
      } = action;

      axios({
        method: 'post',
        url: 'api/auth/login',
        headers: { 'Content-Type': 'application/json' },
        data: {
          username,
          password,
        },
      })
        .then((response) => {
          addNotification('login-success');
          switch (response.data.infos.role) {
            case 'ADMIN': {
              store.dispatch(isAdmin(response.data.infos));
              localStorage.setItem('token', response.data.token);
              break;
            }
            case 'USER': {
              store.dispatch(isUser(response.data.infos));
              localStorage.setItem('token', response.data.token);
              break;
            }
            default: {
              console.log('Huuuum, none of them')
              break;
            }
          }
          console.log(response)
        })
        .catch((error) => {
          addNotification('login-error');
          console.log('Houston ? We got trouble', error);
        });

      break;
    }
    default: {
      next(action);
    }
  }
};

export default loginMiddleware;
