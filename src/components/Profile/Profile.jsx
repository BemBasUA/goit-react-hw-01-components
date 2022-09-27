import PropTypes from 'prop-types';
import { Box } from '../Box/Box';
import {
  Image,
  UserName,
  Tag,
  Location,
  ListItem,
  Item,
  ItemValue,
} from './Profile.styled';

export const Profile = ({ username, tag, location, stats, avatar }) => {
  return (
    <Box bg="primary" m="50px auto" width="cardWidth">
      <Box>
        <Image src={avatar} />
        <UserName>{username}</UserName>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Box>
      <Box
        as="ul"
        display="flex"
        padding="0"
        margin="0"
        bg="secondary"
        justifyContent="space-evenly"
      >
        <ListItem>
          <Item>Followers</Item>
          <ItemValue>{stats.followers}</ItemValue>
        </ListItem>
        <ListItem>
          <Item>Views</Item>
          <ItemValue>{stats.views}</ItemValue>
        </ListItem>
        <ListItem>
          <Item>Likes</Item>
          <ItemValue>{stats.likes}</ItemValue>
        </ListItem>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
