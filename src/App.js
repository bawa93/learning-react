import React from 'react'
import Hello from './Hello.js';
import { useSelector } from 'react-redux'
import './App.css'
import Users from './Users.js';
function App() {
  const counter = useSelector(state => state.counter)
  return (<div>Counter: { counter} <Users></Users></div>);
}

export default App;