import React from 'react';

import './settings.scss';

import ChangeSettings from '../../containers/Settings/ChangeSettings';

const Settings = ({ user }) => {

  return (
    
    <div id="settings">
      <div className="settings-block">
        
        <div className="settings-title">
          <h2>Settings</h2>
          <h3>Change infos</h3>
        </div>

        <div className="settings-content">
          <ChangeSettings user={user} />
        </div>
      </div>
    </div>
    
  );

}

export default Settings;
