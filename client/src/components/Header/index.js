import React from 'react';
import { NavLink } from "react-router-dom";
import { Dropdown, Menu, Image } from 'semantic-ui-react';

import './header.scss';

const Header = ({ disconnect, isUser }) => {

  return (

    <div id="header">
      <Menu>
        <NavLink to="/"><Menu.Item header><Image src='src/public/assets/img/avataaars.svg' avatar /> My App</Menu.Item></NavLink>
        <Menu.Menu position='right'>
          <Dropdown item icon='user circle' simple direction='left'>
            <Dropdown.Menu>
              {isUser ? 
                <NavLink to="/dashboard"><Dropdown.Item>Dashboard </Dropdown.Item></NavLink>
                :
                <NavLink to="/login"><Dropdown.Item>Login </Dropdown.Item></NavLink>
              }
              {isUser && <NavLink to="/settings"><Dropdown.Item>Settings</Dropdown.Item></NavLink>}
              <NavLink to="/" onClick={() => {disconnect()}}><Dropdown.Item>Disconnect</Dropdown.Item></NavLink>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>        
      </Menu>
    </div>
  )

}

export default Header;
