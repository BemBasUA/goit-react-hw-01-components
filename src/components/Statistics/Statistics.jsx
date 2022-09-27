import PropTypes from 'prop-types';
import { Box } from '../Box/Box';
import { TitleText, ListItem, Item, ItemValue } from './Statistics.styled';

const Title = ({ title }) => {
  return <TitleText>{title}</TitleText>;
};

const List = ({ stats }) => {
  return stats.map(item => (
    <ListItem key={item.id}>
      <Item>{item.label}</Item>
      <ItemValue>{item.percentage}</ItemValue>
    </ListItem>
  ));
};

export const Statistics = ({ title, stats }) => {
  return (
    <Box as="section" bg="primary" m="50px auto" width="cardWidth">
      {title && <Title title={title} />}
      <Box
        as="ul"
        display="flex"
        padding="0"
        margin="0"
        bg="secondary"
        justifyContent="space-evenly"
      >
        <List stats={stats} />
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
