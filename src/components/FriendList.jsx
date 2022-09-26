import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from './Box';

const ListItem = styled.li`
  display: flex;
  list-style: none;
  margin: 20px auto;
  justify-content: center;
`;
const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${p =>
    p.isOnline ? p.theme.colors.isOnline : p.theme.colors.isOffline};
`;

const Avatar = styled.img``;

const Name = styled.p``;

const List = ({ friends }) => {
  return friends.map(friend => (
    <ListItem key={friend.id}>
      <Status isOnline={friend.isOnline}></Status>
      <Avatar src={friend.avatar} alt="User avatar" width="48"></Avatar>
      <Name>{friend.name}</Name>
    </ListItem>
  ));
};

export const FriendList = ({ friends }) => {
  return (
    <Box as="ul">
      <List friends={friends}></List>
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
