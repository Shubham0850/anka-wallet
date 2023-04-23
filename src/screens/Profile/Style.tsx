// styles.js
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f7f7f7;
`;

export const ProfileHeader = styled.View`
  padding: 32px;
  background-color: #6200ee;
`;

export const UserInfo = styled.View`
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const UserName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-top: 8px;
`;

export const UserEmail = styled.Text`
  font-size: 14px;
  color: white;
  margin-top: 4px;
`;

export const ListItem = styled.TouchableOpacity`
  background-color: white;
  padding: 16px;
  margin-bottom: 1px;
`;

export const ListItemTitle = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const ListItemSubtitle = styled.Text`
  font-size: 14px;
  color: #777;
  margin-top: 4px;
`;
