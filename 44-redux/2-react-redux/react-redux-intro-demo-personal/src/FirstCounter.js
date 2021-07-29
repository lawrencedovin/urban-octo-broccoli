import { useSelector, useDispatch } from "react-redux";

const FirstCounter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const increment = () => dispatch({type: 'INCREMENT'});
    const decrement = () => dispatch({type: 'DECREMENT'});
    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    );
}

export default FirstCounter;