
import React from 'react';
import { Container } from 'react-bootstrap';

// const Footer = () => {
//   return (
//     <footer className="mt-4 py-3 bg-dark text-white">
//       <Container>
//         <p className="m-0 text-center">© 2024 MyApp. All rights reserved.</p>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
const Footer = () => {
  return (
    <footer className="mt-4 py-3 bg-dark text-white fixed-bottom">
      {" "}
      {/* Add fixed-bottom class */}
      <Container>
        <p className="m-0 text-center">© 2024 MyApp. All rights reserved.</p>
      </Container>
    </footer>
  );
};
export default Footer;