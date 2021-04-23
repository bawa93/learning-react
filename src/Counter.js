const {increment, decrement} = require("./actions");
const {useDispatch} = require("react-redux");
const {useSelector} = require("react-redux");
const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (<div>Counter: { counter}
    <button onClick={() => dispatch(increment(5))}>Increment</button>
    <button onClick={() => dispatch(decrement(2))}>Decrement</button></div>)
}
export default Counter
