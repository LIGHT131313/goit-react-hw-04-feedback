import styled from 'styled-components';

export const Button = styled.button`
  text-transform: capitalize;

  &:not(:last-child) {
    margin-right: ${p => p.theme.spacing(3)};
  }
`;
