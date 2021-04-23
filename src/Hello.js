import React, { useState } from 'react'


function Hello(props) {
    const [isRed, setIsRed] = useState(false)
    const [helloCount, setHelloCount] = useState(0)
    
    const incrementHelloCount = () => {
        setHelloCount(helloCount + 1)
        setIsRed(!isRed)
    }
    return (<div className={ isRed ? "red" : "blue"}>Hello { props.name} { helloCount} <button onClick={incrementHelloCount}>Increment Hello count</button></div>);
}

export default Hello;