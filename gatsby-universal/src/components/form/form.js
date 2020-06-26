import React from 'react'
import { UploadButton,Button ,Label, StyledForm, Input, StyledFieldSet, StyledFormWrapper} from './form.css';

export default function Form() {
    return (
        <StyledFormWrapper>
        <StyledForm name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
           
                <Label htmlFor="name">Name</Label>
                <Input type="text" name="name" id="name" />
            
           
                <Label htmlFor="email">Email</Label>
                <Input type="text" name="email" id="email" />
          
           
                <Label htmlFor="high-school">Current High School</Label>
                <Input type="text" name="high-school" id="high-school" />
          
                <StyledFieldSet>
                    <legend>Photo Category</legend>
                        <label>
                        <input type="radio" name="photo-category" value="Documentary"/>Documentary
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

                <Label htmlFor="upload">Upload (JPG or PNG) </Label>
                <input style={{fontSize: '1.5rem',padding: '20px 20px 20px 0px'}} type="file" name="upload" id="upload" />
      

            <ul className="actions">
                <li>
                    <Button type="submit" value="Submit" className="special" />
                </li>
            </ul>
        </StyledForm>
        </StyledFormWrapper>
    )
}