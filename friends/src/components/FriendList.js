import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Label, Input, Alert } from "reactstrap";
import Friend from "./Friend";

import axios from "axios";
class FriendList extends React.Component {
  state = {
    friends: [],
    nameInput: "",
    ageInput: "",
    emailInput: "",
    error: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addFriend = () => {
    if (
      !this.state.nameInput ||
      !this.state.ageInput ||
      !this.state.emailInput
    ) {
      this.setState({
        error: "Please input all input fields"
      });
    } else {
      const newFriend = {
        name: this.state.nameInput,
        age: this.state.ageInput,
        email: this.state.emailInput,
        id: Date.now()
      };
      axios
        .post("http://localhost:5000/friends", newFriend)
        .then(res =>
          this.setState({
            friends: res.data,
            nameInput: "",
            ageInput: "",
            emailInput: ""
          })
        )
        .catch(err => console.log(err));
    }
  };
  toggle = () => {
    this.setState({
      error: ""
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
          <Alert color="danger" isOpen={this.state.error} toggle={this.toggle}>
            {this.state.error}
          </Alert>
          <Form inline>
            <Label for="name">Name</Label>
            <Input
              placeholder="name"
              id="name"
              name="nameInput"
              type="text"
              value={this.state.nameInput}
              onChange={this.handleChanges}
            />
            <Label for="age">Age</Label>
            <Input
              placeholder="age"
              id="age"
              name="ageInput"
              type="number"
              value={this.state.ageInput}
              onChange={this.handleChanges}
            />
            <Label for="email">Email</Label>
            <Input
              placeholder="email"
              id="email"
              name="emailInput"
              type="email"
              value={this.state.emailInput}
              onChange={this.handleChanges}
            />
            <Button onClick={this.addFriend}>Save Friend</Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default FriendList;
