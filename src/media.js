import React from "react";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

class Media extends React.Component {
  render() {
    return (
      <div className="Mmedia" id="mmedia">
        <h1>Subscribe to our news letter</h1>
        <p>Enter your email to receive notifications about our latest books!</p>
        <div>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button id="basic-addon2">Subscribe</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
    );
  }
}

export default Media;
