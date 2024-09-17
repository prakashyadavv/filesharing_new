// // src/components/Home.js
// import React from "react";

// const Home = () => {
//   return (
//     <div className="home">
//       <h1>Welcome to MyApp</h1>
//       <p>This is the best app for sharing files!</p>
//     </div>
//   );
// };

// export default Home;
// frontend/src/components/Home.js
// frontend/src/components/Home.js
// import React from 'react';
// import { Container, Jumbotron } from 'react-bootstrap'; // Corrected import statement

// const Home = () => {
//   return (
//     <Container>
//       <Jumbotron className="mt-4">
//         <h1>Welcome to MyApp</h1>
//         <p>This is the best app for sharing files!</p>
//       </Jumbotron>
//     </Container>
//   );
// };

// export default Home;
// frontend/src/components/Home.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-4">
      <div className="bg-light p-5 rounded">
        <h1 className="display-4">Welcome to MyApp</h1>
        <p className="lead">This is the best app for sharing files!</p>
      </div>
    </Container>
  );
};

export default Home;

