import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';
import Avatar from 'components/avatar'
import Link from 'gatsby-link'


const Successful = () => (
  <Layout>
    <Head pageTitle={"Successful"} />
    <Box>
      <Title size="large">Submission Successful</Title>
      <br/>
      <h2>Congratulations, your entry to the SSYPC has successfully been submited. To submit another entry (max 1 entry per category), visit the <Link to='/submit'>submissions page</Link>.</h2>
      <br/>
      <h2>Winners will be announced and contacted on August 10th. Please check the SSYPC website for updates on the winners. </h2>
    </Box>
  
    
  </Layout>
);

export default Successful;


