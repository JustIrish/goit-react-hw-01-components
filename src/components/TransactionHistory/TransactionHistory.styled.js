import styled from 'styled-components';

export const TableTransactions = styled.table`
  width: 100%;
  max-width: 800px;
  line-height: 2.5;
  font-size: 14px;
  border-radius: 4px;
  border-spacing: 0;
  border-collapse: collapse;
  th,
  td {
    border-right: 1px solid #e2e8ed;
    border-left: 1px solid #e2e8ed;
  }
`;

export const TableHeader = styled.thead`
  background-color: #5bc6dc;
  color: #ffffff;
  font-size: 12px;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  text-align: center;
  color: #8c8c8c;
  text-transform: capitalize;
`;
