import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from './Box';

const TitleText = styled.h2`
  text-align: center;
`;

const ListItem = styled.li`
  list-style: none;
  margin: auto;
  padding: 10px 0;
  text-align: center;
`;

const Item = styled.span`
  display: block;
`;

const ItemValue = styled.span`
  display: block;
`;

const Title = ({ title }) => {
  if (title) {
    return <TitleText>{title}</TitleText>;
  } else {
    return <TitleText>Upload stats</TitleText>;
  }
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
      <Title title={title}></Title>
      <Box
        as="ul"
        display="flex"
        padding="0"
        margin="0"
        bg="secondary"
        justifyContent="space-evenly"
      >
        <List stats={stats}></List>
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
