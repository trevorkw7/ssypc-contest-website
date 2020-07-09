import styled from 'styled-components';

export const StyledDiv = styled.div`
  
    li {
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        line-height: 1;
        font-size: 1.6rem;
        color: #000;
        background-color: #fff;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        -webkit-font-feature-settings: "pnum";
        font-feature-settings: "pnum";
        font-variant-numeric: proportional-nums;
        margin: 0.5rem 0rem 0.5rem 0rem
      }
      h2{
        display: block;
        font-size: 1.6rem;
        font-weight: 500;
        margin: 1rem 0rem 0rem 0rem;
      }
      
    ol, ul {
        margin: 0 10px;
        padding: 0 10px;
       list-style-type: decimal;
    }
    ol{
        list-style-type: decimal;
    }
    ul{
        list-style-type: square;
    }
    table {
        border: 1px solid #ccc;
        border-collapse: collapse;
        
        margin-top: 10px;
        width: 100%;
        table-layout: fixed;
      }

        @media screen and (min-width: 800px) {
          table{
              max-width: 500px;
              width: 90vw  
              
          }
          width: 90vw
      }

      table caption {
        font-size: 1.5em;
        margin: .5em 0 .75em;
      }
      
      table tr {
        background-color: #f8f8f8;
        border: 1px solid #ddd;
        padding: .4em;
      }
      
      table th,
      table td {
        padding: .625em;
        text-align: center;
      }
      
      table th {
        font-size: .85em;
        letter-spacing: .1em;
        text-transform: uppercase;
      }
      
      @media screen and (max-width: 600px) {
        table {
          border: 0;
        }
      
        table caption {
          font-size: 1.3em;
        }
        
        
        table tr, table th {
          border-bottom: 3px solid #ddd;
          display: block;
          margin-bottom: .625em;
        }
        
        table td {
          border-bottom: 1px solid #ddd;
          display: block;
          font-size: .8em;
          line-height: 1.5em;
          text-align: center;
        }
        
        table td::before {
          /*
          * aria-label has no advantage, it won't be read inside a table
          content: attr(aria-label);
          */
          content: attr(data-label);
          float: left;
          font-weight: bold;
          text-transform: uppercase;
        }
        
        table td:last-child {
          border-bottom: 0;
        }
      }
    
`;

