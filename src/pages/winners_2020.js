import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';
import SimpleReactLightbox from "simple-react-lightbox"
import Gallery from 'components/winner_gallery/gallery.js'



const WinnerGallery = ({ data }) => (

  <Layout>
    <Head pageTitle={data.winnersJson.title} />
    <Box>
        <Title>{data.winnersJson.title}</Title>
    </Box>
   
    <SimpleReactLightbox>
        <Gallery items={data.winnersJson.gallery}/>
    </SimpleReactLightbox>
  </Layout>

);

WinnerGallery.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WinnerGallery;

export const query = graphql`
  query WinnerQuery {
    winnersJson {
        title
      gallery {
        category
        place
        image
        name
      }
    }
  }
`;
