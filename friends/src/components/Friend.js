import React from "react";
import { Card, CardTitle, CardSubtitle, CardBody, CardFooter, CardLink } from "reactstrap";

const Friend = props => {
  const { name, age, email } = props.info;
  return (
    <div className="friend-card">
      <Card>
        <CardBody>
        <CardTitle className="title">
          {name} is {age} years old
        </CardTitle>
        <CardSubtitle>To contact them please email: {email}</CardSubtitle>
        
        </CardBody>
      <CardFooter>
      <CardLink>Update</CardLink>
      <CardLink>Delete</CardLink>

      </CardFooter>
      </Card>

    </div>
  );
};

export default Friend;
