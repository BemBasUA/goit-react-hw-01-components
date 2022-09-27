import { TableRow } from './TableRow';

export const Table = ({ items }) => {
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
          <TableRow key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};
