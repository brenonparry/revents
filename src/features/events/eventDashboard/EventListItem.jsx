import React from 'react'
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'

export default function EventListItem() {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src='/assets/user.png'/>
            <Item.Content>
              <Item.Header content='Event Title'/>
              <Item.Description>
                Hosted by Lloyd
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock'/> Date
          <Icon name='marker'/> Venue
        </span>
      </Segment>
      <Segment>
        <List horizontal>
          <EventListAttendee/>
          <EventListAttendee/>
          <EventListAttendee/>
        </List>
      </Segment>
      <Segment clearing>
        <div>Description of event</div>
        <Button color='teal'floated='right' content='view'/>
      </Segment>
    </Segment.Group>
  )
}
