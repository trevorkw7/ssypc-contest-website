import React from 'react'
import { navigate } from 'gatsby-link'
import { UploadButton, Button, Label, StyledForm, Input, StyledFieldSet, StyledFormWrapper } from './form.css';
import {Link} from 'gatsby'

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
    const [file, setFile] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleAttachment = (e) => {
        setState({ ...state, [e.target.name]: e.target.files[0] })
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleSubmit = (e) => {
        console.log("submitting")
        setLoading(true)
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
                action="/successful"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >

                <input type="hidden" name="form-name" value="file-upload" />

                <p hidden>
                    <Label>
                        Don’t fill this out: <input name="bot-field" onChange={handleChange} required />
                    </Label>
                </p>

                <Label>
                    Name
            <br />
                    <Input type="text" name="name" onChange={handleChange} />
                </Label>


                <Label>Email
          <br />
                    <Input type="text" name="email" onChange={handleChange} />
                </Label>

                <Label htmlFor="high-school">Current High School
            <br />
                    <Input type="text" name="high-school" onChange={handleChange} />
                </Label>

                <StyledFieldSet>
                    <legend>Photo Category</legend>
                    <label>
                        <input type="radio" name="photo-category" value="Documentary" onChange={handleChange} required />Documentary
                        </label>
                    <label>
                        <input type="radio" name="photo-category" value="Landscape" onChange={handleChange} />Landscape
                        </label>
                    <label>
                        <input type="radio" name="photo-category" value="Portrait" onChange={handleChange} />Portrait
                        </label>
                    <label>
                        <input type="radio" name="photo-category" value="Still Life" onChange={handleChange} />Still Life
                        </label>
                    <label>
                        <input type="radio" name="photo-category" value="Abstract" onChange={handleChange} />Abstract
                        </label>
                </StyledFieldSet>

                <Label>
                    Upload (JPG or PNG, Up to 25MB)
            <br />
                    <input accept=".png, .PNG, .jpg, .JPG, .jpeg, .JPEG" style={{fontSize: '1.5rem',padding: '20px 20px 20px 0px'}} type="file" name="attachment" onChange={handleAttachment} required />
                </Label>

                <div >
                    {file ? <img src={file} style={{maxWidth: '50vw', maxHeight: '50vh'}} alt='preview'/> : null}
                </div>
                <br />
                <input type="checkbox" id="Rules agreement" name="Rules agreement" onChange={handleChange} required />
                <label htmlFor="Rules agreement">I hereby confirm the photograph I am submitting is an original work <span style={{ fontWeight: 'bold' }}> photographed by me between July 9th, 2020 and August 1st, 2020. </span></label>
                <br />
                <br />
                <input type="checkbox" id="Rules agreement2" name="Rules agreement2" onChange={handleChange} required />
                <label htmlFor="Rules agreement2">I agree to the rules and terms and conditions outlined in the <Link to="/details">details page</Link>.</label>

                <ul style={{ paddingTop: '20px', paddingBottom:"20px" }} className="actions">
                   
                    <li>
                        <Button type="submit" value="Submit" className="special" />
                    </li>
                </ul>

                {loading ? <p>Submitting... Please Wait</p> : null}

            </StyledForm>
        </StyledFormWrapper>
    )
}