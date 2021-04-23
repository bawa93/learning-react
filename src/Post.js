import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import useFetch from "./useFetch";

const Post = () => {
    const { id } = useParams()
    const { data, isPending, error} = useFetch('http://127.0.0.1:8000/api/jobs/' + id, false)
    return (<div>Id { id }Post: {error ? error : data.title}</div>)
}

export default Post;
