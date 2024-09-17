import React from "react";
import { Container } from "react-bootstrap";

const DefaultComponent = () => {
  return (
    <Container fluid>
      <div className="p-3">
        <h3>Hello World!</h3>
        <p>This is the default content.</p>
      </div>
    </Container>
  );
};

export default DefaultComponent;
