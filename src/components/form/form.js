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
        <StyledForm onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
           
                <Label htmlFor="name">Name</Label>
                <Input type="text" name="name" id="name" required/>
            
           
                <Label htmlFor="email">Email</Label>
                <Input type="text" name="email" id="email" required/>
          
           
                <Label htmlFor="high-school">Current High School</Label>
                <Input type="text" name="high-school" id="high-school" required/>
          
                <StyledFieldSet>
                    <legend>Photo Category</legend>
                        <label>
                        <input type="radio" name="photo-category" value="Documentary" required/>Documentary
                        </label>
                        <label>
                        <input type="radio" name="photo-category" value="Landscape"/>Landscape
                        </label>
                        <label>
                        <input type="radio" name="photo-category" value="Portrait"/>Portrait
                        </label>
                        <label>
                        <input type="radio" name="photo-category" value="Still Life"/>Still Life
                        </label>
                        <label>
                        <input type="radio" name="photo-category" value="Abstract"/>Abstract
                        </label>  
                </StyledFieldSet>

                <Label htmlFor="upload">Upload (JPG or PNG, Up to 25MB) </Label>
                <input onChange={renderPreview} accept=".png, .PNG, .jpg, .JPG, .jpeg, .JPEG" style={{fontSize: '1.5rem',padding: '20px 20px 20px 0px'}} type="file" name="upload" id="upload" required />
               

                <div data-netlify-recaptcha="true"></div>
                <br/>
                <input type="checkbox" id="Rules agreement" name="Rules agreement" required/>
                <label htmlFor="Rules agreement">I hereby confirm the photograph I am submitting is an original work <span style={{fontWeight: 'bold'}}> photographed by me between July 9th, 2020 and August 1st, 2020. </span></label>
                <br/>
                <br/>
                <input type="checkbox" id="Rules agreement2" name="Rules agreement2" required/>
                <label htmlFor="Rules agreement2">I agree to the rules and terms and conditions outlined in the <Link to="/details">details page</Link>.</label>

            <ul style={{paddingTop: '20px'}}className="actions">
                <li>
                    <Button type="submit" value="Submit" className="special" />
                </li>
            </ul>
        </StyledForm>
        </StyledFormWrapper>
    )
}