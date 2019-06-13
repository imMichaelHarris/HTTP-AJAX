import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import FriendList from './components/FriendList'
import Home from './components/Home'
import FriendForm from './components/FriendForm';
import Friend from './components/Friend';

function App() {
  return (
    <div className="App">

      <Route exact path="/" component={Home} />

      <Route exact path="/friends" component={FriendList} />
      <Route path="/friends/form" component={FriendForm} />
    </div>
  );
}

export default App;
