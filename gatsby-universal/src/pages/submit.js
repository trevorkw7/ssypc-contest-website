import React from 'react'
import Title from 'components/title';
import Layout from 'components/layout';
import Box from 'components/box';
import Form from 'components/form'

export default function SubmitPage() {
    return (
        <Layout>
            <Box>
                <Title>
                    Fill out the form and submit your photo below.
        </Title>
            </Box>
           <Form/>
        </Layout>
    )
}