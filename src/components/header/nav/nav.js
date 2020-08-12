import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/winners_2020">2020 Winner Gallery</Link>
      </li>
      <li>
        <Link to="/details">Details</Link>
      </li>
      {/* <li>
        <Link to="/submit">Submit</Link>
      </li> */}

      <li>
        <Link to="/about">About</Link>
      </li>

    </ul>
  </Container>
);

export default Nav;
