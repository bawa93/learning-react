import useFetch from "./useFetch";
import {Link} from "react-router-dom";

const Posts = () => {
    const {data: posts, isPending, error} = useFetch('http://127.0.0.1:8000/api/jobs', true)
    return (<div>Posts: {error ? error : posts.map(item => (
        <div key={item.id}><Link to={`/posts/` + item.id}>{item.title}</Link></div>))}</div>)
}

export default Posts;
