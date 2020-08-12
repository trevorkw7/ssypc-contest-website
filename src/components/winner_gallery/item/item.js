import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, Square } from './item.css';
import { Link } from 'gatsby';

const Item = ({ image, category, place, name}) => (
  
  <figure>
 
      <Square>
            <img style={{maxHeight: "100%", maxWidth: "100%", 
            display: "block"}}src={image} alt={category + " " + place + ": " + name}>
            </img>
      </Square>
   
  

    <figcaption>
      <Copy>{category}</Copy>
      <Copy>{place}</Copy>
      <Title>{name}</Title>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
