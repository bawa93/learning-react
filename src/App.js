import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css'
import Users from './Users.js';
import Posts from "./Posts";
import Post from "./Post";

import Counter from "./Counter";
import CreatePost from "./CreatePost";
import NotFound from "./NotFound";
import Home from "./Home";

function App() {

  const isLogged = useSelector(state => state.isLogged)



  return (<Router><div>
    { isLogged ? <h3>Secret Info</h3> : ''}
  <Switch>
    <Route exact path="/"><Home></Home></Route>
    <Route exact path="/posts/create"><CreatePost></CreatePost></Route>
    <Route exact path="/posts/:id"><Post></Post></Route>
    <Route exact path="/posts"><Posts></Posts></Route>
    <Route exact path="/users"><Users></Users></Route>
    <Route exact path="/counter"><Counter></Counter></Route>
    <Route path="*"><NotFound></NotFound></Route>
  </Switch>
  </div>
  </Router>);
}

export default App;
