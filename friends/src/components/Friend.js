import React from "react";
import { Card, CardTitle, CardSubtitle, CardText } from "reactstrap";

const Friend = props => {
  const { name, age, email } = props.info;
  return (
    <div className="card">
    
      <Card>
        <CardTitle className="title">
          {name} is {age} years old
        </CardTitle>
        <CardSubtitle>To contact them please email: {email}</CardSubtitle>
      </Card>
    </div>
  );
};

export default Friend;
