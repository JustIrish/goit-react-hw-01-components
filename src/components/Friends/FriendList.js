import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendsList, FriendCard } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendCard key={friend.id}>
          <FriendListItem friend={friend} />
        </FriendCard>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
