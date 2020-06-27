import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/submit">Submit</Link>
      </li>
      <li>
        <Link to="/judges_sponsors">Judges & Sponsors</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      
    </ul>
  </Container>
);

export default Nav;
