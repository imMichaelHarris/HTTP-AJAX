import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import FriendList from './components/FriendList'
import Home from './components/Home'

function App() {
  return (
    <div className="App">

      <Route exact path="/" component={Home} />

      <Route exact path="/friends" component={FriendList} />
    </div>
  );
}

export default App;
