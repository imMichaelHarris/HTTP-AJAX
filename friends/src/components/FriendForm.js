import React from "react";
import { Container, Form, Button, Label, Input, Alert } from "reactstrap";


class FriendForm extends React.Component {
  state = {
    nameInput: "",
    ageInput: "",
    emailInput: "",
    error: ""
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
      this.props.addFriend(newFriend);

    }
  };
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  toggle = () => {
    this.setState({
      error: ""
    });
  };
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default FriendForm;
