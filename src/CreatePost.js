import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import useFetch from "./useFetch";

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const job = { title, info}

        console.log(job)
        // make post request
    }
    return (<div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/><br/>
            { title }<br/>
            <input type="text" value={info} onChange={(e) => setInfo(e.target.value)}/><br/>
            { info }<br/>
            <input type="submit" value="Submit"/>
        </form>
    </div>)
}

export default CreatePost;
