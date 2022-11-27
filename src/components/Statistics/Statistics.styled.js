import styled from 'styled-components';

export const StatsSection = styled.section`
  width: 450px;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgb(0 0 0 / 20%);
  text-align: center;
`;

export const StatsName = styled.h2`
  padding: 40px 0px;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  color: #5a5a5d;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const StatsData = styled.li`
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
`;

export const DataName = styled.span`
  color: #e0dbe7;
  margin-bottom: 5px;
`;

export const DataValue = styled.span`
  color: #e0dbe7;
  font-size: 22px;
`;

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
