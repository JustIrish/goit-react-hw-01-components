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
  avatar = 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fallpetrischule-spb.org%2Findex.php%3Ftitle%3D%25D0%25A4%25D0%25B0%25D0%25B9%25D0%25BB%3AAvatar-man.jpg&psig=AOvVaw0Obi5x6LTRWYywSUYs_5VZ&ust=1669574818557000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCktILBzPsCFQAAAAAdAAAAABAS',
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
