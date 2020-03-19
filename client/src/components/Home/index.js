import React from 'react';
import { Label, List } from 'semantic-ui-react';
import { Emoji } from 'emoji-mart';

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
          <div className="home-block-content">
            <div className="home-block-content-title">What's your app about ?</div>
            <p>This is an application with a login component allowing access to certain parts of the app if you are logged in or not. Two accesses (user or admin) also allow access to different content</p>
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

          <div className="home-block-content">
            <div className="home-block-content-title">Want an access ?</div>
            <p>it's not really complicated, the main combinations are:</p>
            <p>username : password</p>
            <p className="home-block-content-access">
              <Emoji emoji='nerd_face' skin={3} set='google' size={22} />User Access
              <Emoji emoji='point_right' skin={3} set='google' size={22} />
              <p>user : user</p>
            </p>
            <p className="home-block-content-access">
              <Emoji emoji='sunglasses' skin={3} set='google' size={22} />Admin Access
              <Emoji emoji='point_right' skin={3} set='google' size={22} />
              <p>admin : admin</p>
            </p>
          </div>

          <div className="home-block-content">
            <div className="home-block-content-title">Want to see the source code ?</div>
            <p>The code is accessible on GitHub </p>
            <p className="home-block-content-link"><Emoji emoji='point_right' skin={3} set='google' size={22} /><a href="https://github.com/MkDs17/TypeORM-React-Redux---Login">Follow this way</a></p>
          </div>

        </div>
        
      </div>
    </div>
    
  );
}

export default Home;
