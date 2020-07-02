import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';
import Avatar from 'components/avatar'


const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <Box>
      <Title size="large">About Us</Title>
      <div style={{paddingTop: '4rem', paddingBottom: '2rem'}}>
      <Title >The Contest</Title>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
    <div style={{padding: '0rem 4rem', maxWidth: '700px'}}>
    <Title>Who We Are</Title>
    </div>
    <Avatar items={data.aboutJson.gallery}/>
    
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }  
        links {
          name
          link
        }
      }
    }
  }
`;
