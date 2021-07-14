import React, { useState, useEffect} from 'react';
import axios from 'axios';

const DadJokes = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function loadJoke() {
            const url = 'https://meme-api.herokuapp.com/gimme'
            const res = await axios.get(url);
            setData(res.data);
        }
        loadJoke();
    }, [data]);

    return(
        <>
            <h3>{data.title ? data.title : 'Loading...'}</h3>
            <img src={data.url} alt={data.title} height="500px" />
        </>
    );
};

export default DadJokes;