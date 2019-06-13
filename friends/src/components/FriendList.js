import React from "react";
import { Route, Link } from "react-router-dom";
import { Container, Button } from "reactstrap";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

import axios from "axios";
class FriendList extends React.Component {
  state = {
    showForm: false,
    formBtnText: "Click here to add a friend"
  };




  toggleForm = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        showForm: !prevState.showForm,
        formBtnText: !this.state.showForm
          ? "Hide form"
          : "Click here to add a friend"
      };
    });
  };

  render() {
    console.log(this.props)
    if(!this.props.friends){
      return <h1>Loading...</h1>
    } else {
      return (
        <>
          <header>
            <Link to="/">Home</Link>
          </header>
          <Container>
            {this.props.friends.map(friend => (
              <Friend key={friend.id} info={friend} />
            ))}
            <footer>
              <Button onClick={this.toggleForm}>{this.state.formBtnText}</Button>
              {this.state.showForm ? (
                <FriendForm addFriend={this.props.addFriend}/>
              ) : (
                ""
              )}
            </footer>
          </Container>
              <Route path="/friends/:id" render={props => <Friend {...props} />} />
  
        </>
      );
    }

  }
}

export default FriendList;
