// // src/components/Navbar.js
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">MyApp</div>
//       <div className="nav-links">
//         <Link to="/login">Login</Link>
//         <Link to="/signup">Signup</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// frontend/src/components/Navbar.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">MyApp</Navbar.Brand>
        <Nav className="ms-auto">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Signup</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

