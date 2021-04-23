import React, { useState } from 'react'


function Tweet(props) {
    
    return (<div className="tweet-container">
        <div className="tweet-user"> {props.name} </div> says <div className="tweet-content">{props.message}</div><br></br>
    </div>);
}

export default Tweet;