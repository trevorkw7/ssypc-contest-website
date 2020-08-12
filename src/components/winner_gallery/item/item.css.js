import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 0.5rem 0rem;
  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

export const Copy = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 200;
  margin: 0.5rem 0rem;
`;

export const Square = styled.div`
{
  width: 100%;
  height: 33vw;
  background-color: #fdf5e8;
  display: flex;
  justify-content: center;
  align-items: center;
  ${MEDIA.TABLET`
    height: 100vw;
  `};
}
`;
export const Rect = styled.div`
{
  padding: 4rem;
  margin: 2rem;
  width: 40%;
  height: 25vw;
  background-color: #fdf5e8;
  display: flex;
  justify-content: center;
  align-items: center;
  ${MEDIA.TABLET`
    width: 100%
    height: 100%
  `};
}
`;


