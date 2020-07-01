import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { CopyLinks ,Links ,Title, Copy, ImageContainer } from './item.css';
// import { Link } from 'gatsby';



const Item = ({ title, copy, image, links }) => (

  <figure>
    <ImageContainer>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    </ImageContainer>
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
      <CopyLinks>
        {links.map((listing, key) => (
          <Links key={key}href={listing.link}>
            {listing.name}
          </Links>
        ))}
      </CopyLinks>
    </figcaption>
  </figure>

);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
