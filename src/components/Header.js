import React from "react";
import { PageHeader } from "react-bootstrap";

const Counter = props => {
  return (
    <div>
      <PageHeader className="App-header">
        <h3>SAVE THE DATE</h3>
        <p>To: Ben, Rita, and Austin Ma</p>
        <br />
        <img src="./img/savedate.jpg" className="App-logo" alt="logo" />
      </PageHeader>
    </div>
  );
};

export default Counter;
