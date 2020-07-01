import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const SmallTitle = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;


export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 0.5rem;
`;

export const CopyLinks  = styled.p`
color: #757575;
margin: 0 2rem 2rem;

${MEDIA.TABLET`
  margin-bottom: 5rem;
`};
`;

export const ImageContainer = styled.div`
  width: "90%";
  margin: 2rem 2rem 1rem;
`;

export const Links = styled.a`
  margin-right: 10px;
  font-size: 0.7em;
`;