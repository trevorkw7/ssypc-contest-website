import React from 'react'
import { navigate } from 'gatsby-link'
import { UploadButton,Button ,Label, StyledForm, Input, StyledFieldSet, StyledFormWrapper} from './form.css';

import Layout from '../layout'

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleAttachment = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] })
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
      
      <StyledForm
        name="file-upload"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >

        <input type="hidden" name="form-name" value="file-upload" />
        
        <p hidden>
          <Label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </Label>
        </p>
        
          <Label>
            Your name:
            <br />
            <Input type="text" name="name" onChange={handleChange} />
          </Label>
      
    
          <Label>
          Upload (JPG or PNG, Up to 25MB)
            <br />
            <input type="file" name="attachment" onChange={handleAttachment} />
          </Label>
       
     
          <ul style={{paddingTop: '20px'}}className="actions">
                <li>
                    <Button type="submit" value="Submit" className="special" />
                </li>
            </ul>
       
      </StyledForm>
      </StyledFormWrapper>
  )
}