import styled from 'styled-components';

export const FriendsList = styled.ul`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FriendCard = styled.li`
  padding: 15px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  box-shadow: 0 5px 15px rgb(0 0 0 / 20%);
`;

export const FriendStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 15px;

  background-color: ${({ isOnline }) => (isOnline ? '#399039' : '#ef3535')};
`;

export const FriendAvatar = styled.img`
  height: 50px;
  margin-right: 15px;
`;

export const FriendName = styled.p`
  font-size: 25px;
`;
