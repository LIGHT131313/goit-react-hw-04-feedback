import styled from 'styled-components';

export const SectionWrap = styled.section`
  margin-right: ${p => p.theme.spacing(10)};
  box-shadow: ${p => p.theme.boxSh.one}, ${p => p.theme.boxSh.two},
    ${p => p.theme.boxSh.three};
  border-radius: ${p => p.theme.borRad};
  padding: ${p => p.theme.spacing(3)};
  background-color: ${p => p.theme.colors.green};

  min-width: 200px;
  min-height: 180px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: ${p => p.theme.spacing(3)};
`;
