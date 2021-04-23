import React from 'react'
import Hello from './Hello.js';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/index'
import './App.css'
import Users from './Users.js';
import Posts from "./Posts";
function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)

  const dispatch = useDispatch();

  return (<div>Posts: <Posts></Posts>Counter: { counter}
    <button onClick={() => dispatch(increment(5))}>Increment</button>
    <button onClick={() => dispatch(decrement(2))}>Decrement</button>
    { isLogged ? <h3>Secret Info</h3> : ''}
    <Users></Users></div>);
}

export default App;
