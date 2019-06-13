import React from "react";
import { Card, CardTitle, CardSubtitle, CardBody, CardFooter } from "reactstrap";
import {Link} from 'react-router-dom'

const Friend = props => {
  const { name, age, email, id } = props.info;
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
      <Link to={`/friends/${id}`}>Update</Link>
      <Link onClick={() => props.deleteFriend(id)}>Delete</Link>

      </CardFooter>
      </Card>

    </div>
  );
};

export default Friend;
