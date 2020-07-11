import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './title.css';

const Title = ({ children, as = 'span', size }) => {
  return (
    <Text as={as} size={size}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  as: PropTypes.string,
  size: PropTypes.oneOf(['large']),
};

export default Title;
