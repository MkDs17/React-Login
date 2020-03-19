import React from 'react';
import { store } from 'react-notifications-component';
import { Emoji } from 'emoji-mart';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const addNotification = (status) => {
  const basicConfig = {
    container: 'bottom-left',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 7000,
      showIcon: true,
      pauseOnHover: true,
    },
  }

  let customClass = '';
  let emoji = '';
  let title = '';
  let content = '';

  switch (status) {
    case 'login-success': {
      customClass = "success",
      emoji = "wave",
      title = "Welcome back",
      content = "What's up since last time ?"
    }
    break;
    case 'login-error': {
      customClass = "danger",
      emoji = "raised_back_of_hand",
      title = "Attention please",
      content = "Hum, seems we got trouble here !"
    }
    break;

    case 'modify-success': {
      customClass = "success",
      emoji = "ok_hand",
      title = "Well Done",
      content = "The informations are well updated"
    }
    break;
    case 'modify-error': {
      customClass = "danger",
      emoji = "thumbsdown",
      title = "Hum, seems we got trouble",
      content = "The informations aren't well updated"
    }
    break;

  }

  store.addNotification({
    content: (
      <div className={`notification-custom notification-custom-${customClass}`}>
        <div className="notification-custom-icon">
          <Emoji
            emoji={emoji}
            set="google"
            skin={3}
            size={40}
          />
        </div>
        <div className="notification-custom-content">
          <div className="notification-custom-content-title">{title}</div>
          <div className="notification-custom-content-message">{content}</div>
        </div>
      </div>
    ),
    ...basicConfig,        
  });

};

export default addNotification;
