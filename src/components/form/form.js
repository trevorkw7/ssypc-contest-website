import React from 'react'
import { UploadButton, Button, Label, StyledForm, Input, StyledFieldSet, StyledFormWrapper } from './form.css';
import { Link } from 'gatsby'
import { navigate } from 'gatsby-link'

function encode(data) {
    const formData = new FormData()

    for (const key of Object.keys(data)) {
        formData.append(key, data[key])
    }

    return formData
}

export default function Form() {


    return (
        <StyledFormWrapper>
            <form name="Contact Form" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="Contact Form" />
                <div>
                    <label><input type="email" name="email" />Your Email:</label>
                    
                </div>
                <div>
                    <label><textarea name="message" />Message:</label>
                    
                </div>
                <div>
                    <label> <input type="file" name="upload" />Upload:</label>
                   
                </div>
                <button type="submit">Send</button>
            </form>
        </StyledFormWrapper>
    )
}