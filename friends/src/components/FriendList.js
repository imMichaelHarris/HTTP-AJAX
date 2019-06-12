import React from "react";
import { Link } from "react-router-dom";
import {Container} from 'reactstrap';
import Friend from './Friend';

import axios from "axios";
class FriendList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
       axios
        .get("http://localhost:5000/friends")
        .then(res => this.setState({ friends : res.data}))
        // .then(res => this.setState({ friends: res.data }))
        .catch(err => console.log(err))

  }

  render() {

      return (
        <>
          <Link to="/">Home</Link>
          <Container>
          {this.state.friends.map(friend => <Friend key={friend.id} info={friend} />)}

          </Container>
        </>
      );
    
  }
}

export default FriendList;
