import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function SignedInMenu({setAuthenticated}) {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/user.png'/>
      <Dropdown pointing='top left' text='Lloyd'>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus'/>
          <Dropdown.Item text='My Profile' icon='user'/>
          <Dropdown.Item onClick={() => setAuthenticated(false)} text='Sign Out' icon='power'/>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}
