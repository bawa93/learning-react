import {useState, useEffect} from "react";

const useFetch = (url) => {
    const [posts, setPosts] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch(url).then(response => {
                return response.json()
            }).then(data => {
                setIsPending(false)
                console.log(data)
                setPosts(data.result.data)
            }).catch(error => {
                setError(error)
            });
        }, 1000)


    },[posts])
    return { posts, isPending, error}
}
export default useFetch

