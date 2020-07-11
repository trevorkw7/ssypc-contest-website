import React from 'react'
import { UploadButton,Button ,Label, StyledForm, Input, StyledFieldSet, StyledFormWrapper} from './form.css';
import {Link} from 'gatsby'
import { navigate } from 'gatsby-link'

function encode(data) {
    const formData = new FormData()
  
    for (const key of Object.keys(data)) {
      formData.append(key, data[key])
    }
  
    return formData
  }

export default function Form() {
    const [state, setState] = React.useState({})

    
    function renderPreview(e){
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
          method: 'POST',
          body: encode({
            'form-name': form.getAttribute('name'),
            ...state,
          }),
        })
          .then(() => navigate(form.getAttribute('action')))
          .catch((error) => alert(error))
      }

    return (
        <StyledFormWrapper>
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <   input type="hidden" name="form-name" value="contact" />
           
        <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        </StyledFormWrapper>
    )
}