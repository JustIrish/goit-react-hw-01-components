import PropTypes from 'prop-types';
import { FriendAvatar, FriendStatus, FriendName } from './Friends.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
