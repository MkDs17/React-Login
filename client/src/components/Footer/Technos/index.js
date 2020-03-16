import React from 'react';
import { Divider, Header, List } from 'semantic-ui-react';
import { Emoji } from 'emoji-mart';

import './technos.scss';

import data from './data';

const Technos = () => {
  
  return (
    
    <div id="technos">
        <Divider horizontal>
          <Header className='custom-header' as='h4'>
            <Emoji emoji='heart_eyes' set='google' size={26} />
            Front End
          </Header>
        </Divider>
        <List divided relaxed>
          {data.front.map((item) => (
            <List.Item key={item.id}>
              <List.Icon name={item.icon} size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header as='h3'>{item.name}</List.Header>
                <List.Description>{item.desc}</List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
        <Divider horizontal>
          <Header className='custom-header' as='h4'>
            <Emoji emoji='nerd_face' set='google' size={26} />
            Back End
          </Header>
        </Divider>
        <List divided relaxed>
          {data.back.map((item) => (
            <List.Item key={item.id}>
              <List.Icon name={item.icon} size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header as='h3'>{item.name}</List.Header>
                <List.Description>{item.desc}</List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
    </div>
    
  );  
  
};

Technos.propTypes = {
};

export default Technos;
