import {useState, useEffect} from "react"
function useStats(url){
    const[stats, setStates] =useState()
    const[error, setError] =useState()
    const[loading, setloading] =useState(true)

    useEffect(() => {
        const fetchData = async() => {
        const data = await fetch(url)
        .then((res)=>res.json())
        .catch((err) => setError(err));
        setStates(data);
        setloading(false);
    };
    fetchData();  
    }, [url]);

    return{
        stats,
        error,
        loading
    }
} 

export default useStats;
