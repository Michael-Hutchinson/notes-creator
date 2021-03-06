import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header: React.FunctionComponent = () => (
  <Navbar fixed="top" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>Note Creator</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
