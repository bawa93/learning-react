import React, { useState } from 'react'


function Hello(props) {
    const [helloCount, setHelloCount] = useState(0)
    
    const incrementHelloCount = () => {
        setHelloCount(helloCount+1)
    }
    return (<div>Hello { props.name} { helloCount} <button onClick={incrementHelloCount}>Increment Hello count</button></div>);
}

export default Hello;