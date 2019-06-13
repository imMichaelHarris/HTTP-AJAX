import React from "react";
import {Alert} from 'reactstrap'

const Errors = (props) => {
  return (
    <Alert color="danger" isOpen={props.error} toggle={props.toggle}>
      {props.error}
    </Alert>
  );
};

export default Errors;
