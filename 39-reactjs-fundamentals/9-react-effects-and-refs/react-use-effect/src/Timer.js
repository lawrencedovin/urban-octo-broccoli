import React, {useState, useEffect} from 'react';

const Timer = (() => {
    const [seconds, setSeconds] = useState(0);
    // const handleChange = (() => {
    //     setInterval(() => {
    //         // returns seconds + 1 that gets passed into the 
    //         // function again until timer runs out
    //         setSeconds((seconds) => seconds + 1);
    //     }, 1000)
    // });

    // If empty array as 2nd argument only runs 1 time after render
    useEffect(() => {
        setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000)
    }, []);

    return (
        <>
            <h1>{seconds}</h1>
            {/* <button onClick={handleChange}>Start Timer</button> */}
        </>
    );
});

export default Timer;