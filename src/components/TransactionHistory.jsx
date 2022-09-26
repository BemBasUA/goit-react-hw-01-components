import PropTypes from 'prop-types';
import { Box } from './Box';

const TableRow = ({ item }) => {
  return (
    <tr>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  );
};

const Table = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TableRow key={item.id} item={item}></TableRow>
        ))}
      </tbody>
    </table>
  );
};

export const Transactions = ({ items }) => {
  return (
    <Box as="section" bg="primary" m="50px auto" width="cardWidth">
      <Table items={items}></Table>
    </Box>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
