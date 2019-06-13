import React from "react";
import { Route, Link } from "react-router-dom";
import { Container, Button } from "reactstrap";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

import axios from "axios";
class FriendList extends React.Component {
  state = {
    friends: [],
    showForm: false,
    formBtnText: "Click here to add a friend"
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  addFriend = newFriend => {
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res =>
        this.setState({
          friends: res.data
        })
      )
      .catch(err => console.log(err));
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
    return (
      <>
        <header>
          <Link to="/">Home</Link>
        </header>
        <Container>
          {this.state.friends.map(friend => (
            <Friend key={friend.id} info={friend} />
          ))}
          <footer>
            <Button onClick={this.toggleForm}>{this.state.formBtnText}</Button>
            {this.state.showForm ? (
              <FriendForm addFriend={this.addFriend} />
            ) : (
              ""
            )}
          </footer>
        </Container>
        <Route path="/friends/:id" render={props => <Friend {...props} friend={}} />

      </>
    );
  }
}

export default FriendList;
