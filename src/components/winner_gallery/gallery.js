import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/winner_gallery/item';
import { Container } from './gallery.css';
import {SRLWrapper} from "simple-react-lightbox";
import { Rect } from 'components/winner_gallery/item/item.css.js';
import Title from 'components/title';


const Gallery = ({ items }) => (
  <SRLWrapper>
     <div style={{width: "100%", justifyContent: "center", alignItems: "center", display: "flex"}}>
      <Rect>
        <img style={{height: "100%", width: "100%"}} src="../Winning_Photos/Landscape_First.jpg" alt="Overall Winner: Jacob Assouline" />
      </Rect> 
    </div>
    <div style={{width: "100%", justifyContent: "center", alignItems: "center", display: "flex"}}>
    <Title>Overall Winner: Jacob Assouline</Title>
    </div>
  <Container>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
  </SRLWrapper>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
