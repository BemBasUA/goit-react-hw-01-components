import PropTypes from 'prop-types';
import { Box } from '../Box/Box';
import { Table } from './Table';
export const Transactions = ({ items }) => {
  return (
    <Box as="section" bg="primary" m="50px auto" width="cardWidth">
      <Table items={items} />
    </Box>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
