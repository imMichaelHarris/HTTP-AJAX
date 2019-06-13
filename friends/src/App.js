import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import axios from 'axios';
import FriendList from './components/FriendList'
import Home from './components/Home'
import FriendForm from './components/FriendForm';
import Friend from './components/Friend';

class App extends React.Component {
  state = {
    friends: []
  }
  componentDidMount() {
    setTimeout(() => {
      axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
    }, 0)

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

  editFriend = friendId =>{
    console.log('hey')
  }

  deleteFriend = friendId => {
    console.log('boo', friendId)
  }

  render(){
    return (
      <div className="App">
  
        <Route exact path="/" component={Home} />
  
        <Route exact path="/friends" render={props => <FriendList {...props} friends={this.state.friends} addFriend={this.addFriend} editFriend={this.editFriend} deleteFriend={this.deleteFriend} />} />
        <Route path="/friends/:id" render={props => <Friend {...props} info={this.state.friends} />} />

        <Route path="/friends/form" render={props => <FriendForm {...props} addFriend={this.addFriend} />} />
      </div>
    );
  }

}

export default App;
