import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  list-style: none;
  margin: 20px auto;
  justify-content: center;
`;
export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${p =>
    p.isOnline ? p.theme.colors.isOnline : p.theme.colors.isOffline};
`;

export const Avatar = styled.img``;

export const Name = styled.p``;
