import {useEffect, useState} from "react";

const useFetch = (url, isCollection=true) => {
    const abortCont = new AbortController();
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal}).then(response => {
                return response.json()
            }).then(data => {
                setIsPending(false)
                console.log(data)
                let result = ''
                if(isCollection) {
                    result = data.result.data;
                } else {
                    result = data.result
                }
                setData(result)
            }).catch(error => {
                if (error.name === 'AbortError') {
                    console.log('abort error')
                } else {
                    setError(error)
                }
            });
        }, 1000)
        return () => abortCont.abort()
    }, [data])
    return {data, isPending, error}
}
export default useFetch

