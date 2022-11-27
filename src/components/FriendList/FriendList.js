import PropTypes from 'prop-types';
import {
  FriendsList,
  FriendCard,
  FriendAvatar,
  FriendStatus,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendCard key={id}>
          <FriendStatus isOnline={isOnline}></FriendStatus>
          <FriendAvatar src={avatar} alt={name} width="48" />
          <FriendName>{name}</FriendName>
        </FriendCard>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
