// App.js
import React from 'react';
import {
  Container,
  ProfileHeader,
  Avatar,
  UserInfo,
  UserName,
  UserEmail,
  ListItem,
  ListItemTitle,
  ListItemSubtitle,
} from './Style';
import ScreenWrapper from '../../components/Helper/ScreenWrapper';

const Profile = () => {
  return (
    <ScreenWrapper>
      <Container>
        <ProfileHeader>
          <UserInfo>
            <Avatar source={{uri: 'https://via.placeholder.com/80'}} />
            <UserName>John Doe</UserName>
            <UserEmail>john.doe@example.com</UserEmail>
          </UserInfo>
        </ProfileHeader>
        <ListItem>
          <ListItemTitle>Payment methods</ListItemTitle>
          <ListItemSubtitle>
            Debit cards, bank accounts, and more
          </ListItemSubtitle>
        </ListItem>
        <ListItem>
          <ListItemTitle>Subscriptions</ListItemTitle>
          <ListItemSubtitle>Active, past, and canceled</ListItemSubtitle>
        </ListItem>
        <ListItem>
          <ListItemTitle>Google Pay balance</ListItemTitle>
          <ListItemSubtitle>Check your balance and add money</ListItemSubtitle>
        </ListItem>
        <ListItem>
          <ListItemTitle>Send or request money</ListItemTitle>
          <ListItemSubtitle>
            Send money or request from friends
          </ListItemSubtitle>
        </ListItem>
        <ListItem>
          <ListItemTitle>Activity</ListItemTitle>
          <ListItemSubtitle>
            See your payment activity and history
          </ListItemSubtitle>
        </ListItem>
        <ListItem>
          <ListItemTitle>Offers</ListItemTitle>
          <ListItemSubtitle>Find and redeem offers</ListItemSubtitle>
        </ListItem>
        <ListItem>
          <ListItemTitle>Settings</ListItemTitle>
          <ListItemSubtitle>
            Privacy, security, notifications, and more
          </ListItemSubtitle>
        </ListItem>
        <ListItem>
          <ListItemTitle>Help & feedback</ListItemTitle>
        </ListItem>
      </Container>
    </ScreenWrapper>
  );
};

export default Profile;
