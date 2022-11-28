import styled from 'styled-components';

export const UserCard = styled.div`
  width: 350px;
  border-radius: 6px;
  box-shadow: 0 5px 15px rgb(0 0 0 / 20%);
  text-align: center;
`;

export const UserInfo = styled.div`
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
    border: 1px solid #e2e8ed;
    border-radius: 50%;
    margin-bottom: 40px;
  }
`;

export const UserName = styled.p`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 18px;
`;

export const UserTeg = styled.p`
  color: #8c8c8c;
  margin-bottom: 18px;
`;

export const UserLocation = styled.p`
  font-size: 18px;
  color: #8c8c8c;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const UserStats = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  padding: 20px 0px;
  background-color: #ecf2f7;
  border: 1px solid #e2e8ed;
`;

export const StatName = styled.span`
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 5px;
`;

export const StatData = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
