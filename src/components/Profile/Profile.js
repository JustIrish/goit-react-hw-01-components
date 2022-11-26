import PropTypes from 'prop-types';
import {
  UserCard,
  UserInfo,
  UserName,
  UserTeg,
  UserLocation,
  StatsList,
  UserStats,
  StatName,
  StatData,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <UserCard>
      <UserInfo>
        <img src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTeg>@{tag}</UserTeg>
        <UserLocation>{location}</UserLocation>
      </UserInfo>

      <StatsList>
        <UserStats>
          <StatName>Followers</StatName>
          <StatData>{followers}</StatData>
        </UserStats>
        <UserStats>
          <StatName>Views</StatName>
          <StatData>{views}</StatData>
        </UserStats>
        <UserStats>
          <StatName>Likes</StatName>
          <StatData>{likes}</StatData>
        </UserStats>
      </StatsList>
    </UserCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
