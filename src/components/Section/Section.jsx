import PropTypes from 'prop-types';
import { SectionWrap, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionWrap>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
