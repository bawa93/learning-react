import React, { useState } from 'react'
import Tweet from './Tweet';

function Users(props) {
    const [users, setUsers] = useState([
        { name: "Ed", message: "Hey There" },
        { name: "JD", message: "Hello There" },
        { name: "PD", message: "Hi There"}, 
    ])
    

    return (<div>
        { users.map(user => (
            <Tweet name={user.name} message={ user.message }></Tweet>
        ))}
    </div>);
}

export default Users;