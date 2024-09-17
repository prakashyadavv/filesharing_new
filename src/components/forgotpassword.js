// // src/components/ForgotPassword.js
// import React from 'react';

// const ForgotPassword = () => {
//   return (
//     <div className="auth-card">
//       <h2>Forgot Password</h2>
//       <form>
//         <input type="email" placeholder="Enter Email Address" required />
//         <button type="submit">Reset My Password</button>
//       </form>
//     </div>
//   );
// };

// export default ForgotPassword;

// frontend/src/components/ForgotPassword.js
import React from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

const ForgotPassword = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Reset My Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
