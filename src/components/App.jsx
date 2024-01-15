import Profile from './UserProfile/Profile';
import Statistics from './UserStatistics/Statistics';
import Friends from './UserFriendsList/Friends';
import Transactions from './UserTransactions/Transactions';

import user from './ImportData/user.json';
import data from './ImportData/data.json';
import friends from './ImportData/friends.json';
import transactions from './ImportData/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
