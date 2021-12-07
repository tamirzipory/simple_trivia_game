import axios from 'axios';
import  { useEffect, useState } from 'react'

axios.defaults.baseURL = "https://opentdb.com"
function useAxios({url}) {
    const [response, setResponse] = useState(null);
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(true);
    
    useEffect(() =>{
        const fetchData = () =>{
            axios.get(url)
            .then((res) => setResponse(res.data))
            .catch((err) => setErr(err))
            .finally(() => setLoading(false));

        };
        fetchData();
    },[url])
    return (
        {response, err, loading}
    )
}

export default useAxios
