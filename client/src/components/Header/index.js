import React from 'react';
import { NavLink } from "react-router-dom";
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
import { AiOutlineLogout, AiOutlineLogin } from 'react-icons/ai';

import './header.scss';

const Header = () => {

  return (
    <div id="header">
      <Menu>
        <NavLink to="/"><Menu.Item header>TSNodeTypeORM | Redux | Login --- StarterKit</Menu.Item></NavLink>
        <Menu.Menu position='right'>
          <Dropdown item icon='user circle' simple direction='left'>
            <Dropdown.Menu>
              <NavLink to="/login"><Dropdown.Item><AiOutlineLogin /> Login </Dropdown.Item></NavLink>
              <NavLink to="/disconnect"><Dropdown.Item><AiOutlineLogout /> Disconnect</Dropdown.Item></NavLink>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>        
      </Menu>
    </div>
  )

}

export default Header;
