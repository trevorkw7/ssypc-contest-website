import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/avatar/item';
import { Container } from './avatar.css';

const Avatar = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
);

Avatar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Avatar;
