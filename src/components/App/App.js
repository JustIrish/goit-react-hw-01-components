import { Profile } from '../Profile/Profile';
import { GlobalStyle } from '../GlobalStyles';
import { AppWrapper } from './App.styled';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <AppWrapper>
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
    </AppWrapper>
  );
};
