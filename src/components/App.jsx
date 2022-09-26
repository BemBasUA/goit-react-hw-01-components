import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { Transactions } from './TransactionHistory';
import data from '../data/data.json';
import user from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title={data.title} />
      <FriendList friends={friends}></FriendList>
      <Transactions items={transactions}></Transactions>
    </>
  );
};
