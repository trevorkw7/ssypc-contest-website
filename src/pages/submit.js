import React from 'react'
import Title from 'components/title';
import Layout from 'components/layout';
import Box from 'components/box';
import Form from 'components/form'
import { Link } from 'gatsby';

export default function SubmitPage() {
    return (
        <Layout>
            <Box>
                <Title>
                    First <Link to="/details">read</Link> the rules.
                    Then fill out the form and submit your photo below.
                  
                </Title>
                <br/>
                <Title>
                To submit multiple photos (you may submit one photo per category), please re-submit this form with the same name, email, and high school.
                </Title>
            </Box>
           <Form/>
        </Layout>
    )
}