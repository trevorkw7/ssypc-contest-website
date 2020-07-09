import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/avatar/item';
import { Container } from './avatar.css';

const Avatar = ({ items, number }) => (
  <Container number={number}>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
);

Avatar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  size:  PropTypes.number,
};

export default Avatar;
