import styled from 'styled-components';

export const StyledForm = styled.form`
    width: 100%;
    max-width: 700px
    padding: 20px;
   
`;
export const Input = styled.input`
    display: block;
    width: 100%;
    height: 40px
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    box-sizing: border-box
    font-size: 1.8rem
`;
export const StyledFieldSet = styled.fieldset`
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin 20px 0;
    legend{
        padding: 0 10px;
    }
    label{
        padding-right: 20px
    }
 `;
export const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: left;
    align-item: center;
    height: 100vh;
    padding: 0 20px;
`;
export const Label = styled.label`
    display: block;
    font-size: '2rem';
    line-height: 1.2;
`;
export const Button = styled.input`
    display: block;
    background-color: #f7797d
    color: #fff;
    font-size: 1.2rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
`

export const UploadButton = styled.input`
    display: block;
    background-color: #77dd77
    color: #fff;
    font-size: 1.2rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
`

