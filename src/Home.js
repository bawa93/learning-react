import {Link} from "react-router-dom";

const Home = () => {
    return (<div>
        <ul>
            <li>
                <Link to="/posts">Posts</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
        </ul>

    </div>)
}
export default Home
