import { Profile } from './Profile/Profile';
import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <Layout>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};