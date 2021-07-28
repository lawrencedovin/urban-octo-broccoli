import {useSelector, useDispatch} from 'react-redux';

const FirstCounter = () => {
    const count = useSelector(store => store.count);
    const dispatch = useDispatch();
    const increment = () => dispatch({type: 'INCREMENT'});
    const decrement = () => dispatch({type: 'DECREMENT'});

    return (
        <>
            <h1>Current Count: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    );
}

export default FirstCounter;