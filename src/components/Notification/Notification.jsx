import PropTypes from 'prop-types';
import { MesssageText } from './Notification.styled';

export const Notification = ({ message }) => {
  return <MesssageText>{message}</MesssageText>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
