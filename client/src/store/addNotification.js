import React from 'react';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

import { Icon } from 'semantic-ui-react';

const addNotification = (status) => {
  const basicConfig = {
    container: 'bottom-left',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 5000,
      showIcon: true,
    },
  } 

  switch (status) {
    case 'login-success': {
      store.addNotification({
        title: 'Welcome back',
        message: 'What\'s up ?',
        type: 'success',
        ...basicConfig,        
      });
      break;
    }
    case 'login-error': {
      store.addNotification({
        title: 'Attention please, attention please',
        message: 'Hum, seems we got trouble here !',
        type: 'danger',
        ...basicConfig,
      });
      break;
    }

    default: {
      store.addNotification({
        title: 'Little attention please',
        message: 'Can you retry, or call an Administrator, Nooooow!',
        type: 'info',
        ...basicConfig,
      });
      break;
    }
  }
};

export default addNotification;
