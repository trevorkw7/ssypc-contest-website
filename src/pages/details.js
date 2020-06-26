import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';
import {StyledDiv} from 'components/document/document.css'


const Details = ({ data }) => (
  <Layout>
    <Head pageTitle={data.detailsJson.title} />
    <Box>
      <Title>{data.detailsJson.title}</Title>
        <StyledDiv
            dangerouslySetInnerHTML={{
            __html: data.detailsJson.content.childMarkdownRemark.html,
            }}
        />
    </Box>
  </Layout>
);

Details.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Details;

export const query = graphql`
  query DetailsQuery {
    detailsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
