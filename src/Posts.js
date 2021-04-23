import {useEffect, useState} from "react";
import useFetch from "./useFetch";

const Posts = () => {
    const { posts, isPending, error} = useFetch('http://127.0.0.1:8000/api/production-types')
    return (<div>Posts: {error ? error : posts.map(item => (<div key={item.id}>{item.title}</div>))}</div>)
}

export default Posts;
