import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${({ number }) => () => {
    switch(number){
      case 1:
        return 'repeat(1, minmax(0, 1fr))';
      case 2:
        return 'repeat(2, minmax(0, 1fr))';
      default:
        return 'repeat(3, minmax(0, 1fr))';
    }
    
  }
};
  grid-gap: 4rem;
  padding: 0 4rem;
  margin: 2rem 0;
  max-width: 1000px


  ${MEDIA.TABLET`
    display: block;
  `};
`;
