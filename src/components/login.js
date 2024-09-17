import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import api from "../service/api";
import Dashboard from "./dashboard"; // Import the Dashboard component

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const response = await api.login(emailOrUsername, password);
      console.log(response);
      setMessage("Login successful");
      localStorage.setItem("token", response.data.token);
      setError("");
      setRedirectToDashboard(true); // Set state to redirect to Dashboard
    } catch (error) {
      console.error(
        "Login Error:",
        error.response ? error.response.data : error.message
      );
      setError("Login failed. Please check your credentials.");
      setMessage("");
    }
  };

  if (redirectToDashboard) {
    return <Dashboard />;
  }

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <h2>Login</h2>
          {message && <Alert variant="success">{message}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address / Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email or username"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/signup">Don't have an account? Signup</Link>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <Button variant="primary" type="submit" className="mt-3">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

// import React, { useState } from "react";
// import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import api from "../service/api";

// const Login = () => {
//   const [emailOrUsername, setEmailOrUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.login(emailOrUsername, password);
//       console.log(response);
//       setMessage("Login successful");
//       localStorage.setItem("token", response.data.token);
//       setError("");
//     } catch (error) {
//       console.error(
//         "Login Error:",
//         error.response ? error.response.data : error.message
//       );
//       setError("Login failed. Please check your credentials.");
//       setMessage("");
//     }
//   };

//   return (
//     <Container>
//       <Row className="justify-content-center mt-4">
//         <Col md={6}>
//           <h2>Login</h2>
//           {message && <Alert variant="success">{message}</Alert>}
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleLogin}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email Address / Username</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter email or username"
//                 value={emailOrUsername}
//                 onChange={(e) => setEmailOrUsername(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </Form.Group>

//             <div className="d-flex justify-content-between align-items-center">
//               <Link to="/signup">Don't have an account? Signup</Link>
//               <Link to="/forgot-password">Forgot Password?</Link>
//             </div>

//             <Button variant="primary" type="submit" className="mt-3">
//               Login
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;
