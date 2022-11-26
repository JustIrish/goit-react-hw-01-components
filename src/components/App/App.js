import { Profile } from '../Profile/Profile';
import user from '../user.json';
import { GlobalStyle } from '../GlobalStyles';
import { AppWrapper } from './App.styled';

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
      <GlobalStyle />
    </AppWrapper>
  );
};
