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
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">
  
        <Route exact path="/" component={Home} />
  
        <Route exact path="/friends" render={props => <FriendList {...props} friends={this.state.friends} />} />
        <Route path="/friends/form" render={FriendForm} />
      </div>
    );
  }

}

export default App;
