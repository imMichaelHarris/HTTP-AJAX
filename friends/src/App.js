import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import FriendList from './components/FriendList'

function App() {
  return (
    <div className="App">

      <Link to='/friends'>Go to FriendsList</Link>
      <Route exact path="/friends" component={FriendList} />
    </div>
  );
}

export default App;
