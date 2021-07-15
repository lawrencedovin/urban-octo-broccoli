import { useEffect, useState } from "react";

// Gets data, handles errors
const useFetch = (url, options = {}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setisLoading] = useState(true);

    // after the first render, fetch our data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setResponse(json);
            }
            catch (error) {
                setError(error);
            }
            setisLoading(false);
        };
        fetchData();
    }, [url]);

    return { response, error, isLoading };
};

export default useFetch;