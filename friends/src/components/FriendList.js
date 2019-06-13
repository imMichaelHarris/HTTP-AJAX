import React from "react";
import { Route, Link } from "react-router-dom";
import { Container, Button, Spinner } from "reactstrap";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

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
    if (!this.props.friends) {
      console.log("loading");
      return (
        <div className="center">
          <Spinner color="primary" />
        </div>
      );
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
              <Button onClick={this.toggleForm}>
                {this.state.formBtnText}
              </Button>
              {this.state.showForm ? (
                <FriendForm addFriend={this.props.addFriend} />
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
