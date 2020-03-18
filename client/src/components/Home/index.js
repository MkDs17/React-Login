import React from 'react';
import { Label, List } from 'semantic-ui-react';

import './home.scss';

import labels from './dataLabels'

const Home = () => {

  return (
    
    <div id="home">
      <div className="home-block">
        <div className="home-block-title">
          <h2>Homepage</h2>
          <h3>Welcome dude</h3>
        </div>

        
        <div className="shadow">
        <div className="home-block-background"></div>

          <div className="home-block-content">
            <div className="home-block-content-title">What's your app about ?</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div className="home-block-content">
            <div className="home-block-content-title">what technologies did i use ?</div>
            {labels.map(label => (
              <Label key={label.id} as="a" color={label.color} image pointing size="mini">
              {label.text}
              <Label.Detail>{label.detail}</Label.Detail>
            </Label>
            ))}            
            <p>Want to know more ? Click on the "Some Stuff" button on the footer</p>
          </div>

          <div className="home-block-content">
            <div className="home-block-content-title">Content of app</div>
            <List>
              <List.Item className="forAll">
                <List.Icon name='folder' />
                <List.Content>
                  <List.Header>Homepage</List.Header>
                  <List.Description>The Homepage of the app</List.Description>                  
                </List.Content>
              </List.Item>
              <List.Item className="forAll">
                <List.Icon name='folder open' />
                <List.Content>
                  <List.Header>LoginPage</List.Header>
                  <List.Description>Login component</List.Description>
                    <List.List>
                      <List.Item className="forUser">
                        <List.Icon name='caret down' />
                        <List.Content>
                          <List.Header>USER</List.Header>
                          <List.List>
                            <List.Item>
                              <List.Icon name='address card outline' />
                              <List.Content>
                                <List.Header>Dashboard</List.Header>
                                <List.Description>a personnal dashboard for each user</List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon name='setting' />
                              <List.Content>
                                <List.Header>Settings</List.Header>
                                <List.Description>user can edit his personnal informations (only name and designation)</List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon name='sign-out' />
                              <List.Content>
                                <List.Header>Log out</List.Header>
                              </List.Content>
                            </List.Item>
                          </List.List>
                        </List.Content>
                      </List.Item>
                    </List.List>
                    <List.List>
                      <List.Item className="forAdmin">
                        <List.Icon name='caret down' />
                        <List.Content>
                          <List.Header>ADMIN</List.Header>
                          <List.List>
                            <List.Item>
                              <List.Icon name='address card outline' />
                              <List.Content>
                                <List.Header>Dashboard</List.Header>
                                <List.Description>a dashboard with all user's list</List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon name='setting' />
                              <List.Content>
                                <List.Header>Settings</List.Header>
                                <List.Description>admin can edit informations (all of them) of ALL users </List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon name='sign-out' />
                              <List.Content>
                                <List.Header>Log out</List.Header>
                              </List.Content>
                            </List.Item>
                          </List.List>
                        </List.Content>
                      </List.Item>
                    </List.List>
                </List.Content>
              </List.Item>
            </List>
            
            <Label.Group size="medium">
              <Label className="labelCustom forAllLabel" as='a'>Accessible for All</Label>
              <Label className="labelCustom forUserLabel" as='a'>Restricted to logged users</Label>
              <Label className="labelCustom forAdminLabel" as='a'>Restricted to logged admin(s)</Label>
            </Label.Group>
          </div>

        </div>
        
      </div>
    </div>
    
  );
}

export default Home;
