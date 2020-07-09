import React from 'react'
import Title from 'components/title';
import Layout from 'components/layout';
import Box from 'components/box';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Avatar from 'components/avatar'


export default function Judges_Sponsors({ data }) {
  console.log(data)
  return (
    <Layout>
       <Box>
        <Title size="large">
          Our Sponsor
        </Title>
      </Box>
      <Avatar number={1} items={data.judgesSponsorsJson.sponsors} />

      <Box>
        <Title size="large">
          Meet Our Judges
                </Title>
      </Box>
      <Avatar number={2}  items={data.judgesSponsorsJson.judges} />
     
    </Layout>
  )
}

Judges_Sponsors.propTypes = {
  data: PropTypes.object.isRequired,
};



export const query = graphql`
query MyQuery {
  judgesSponsorsJson {
    judges {
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
    sponsors {
      title
      copy
      image {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 1200, quality: 90) {
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

