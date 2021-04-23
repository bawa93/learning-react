import {useEffect, useState} from "react";

const useFetch = (url) => {
    const abortCont = new AbortController();
    const [posts, setPosts] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal}).then(response => {
                return response.json()
            }).then(data => {
                setIsPending(false)
                console.log(data)
                setPosts(data.result.data)
            }).catch(error => {
                if (error.name === 'AbortError') {
                    console.log('abort error')
                } else {
                    setError(error)
                }
            });
        }, 1000)
        return () => abortCont.abort()
    }, [posts])
    return {posts, isPending, error}
}
export default useFetch

