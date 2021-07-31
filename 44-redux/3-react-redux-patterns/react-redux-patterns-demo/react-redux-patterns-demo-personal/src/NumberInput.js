import { useDispatch } from "react-redux";
import { useState } from 'react';
import './NumberInput.css';

const NumberInput = () => {

    const INITIAL_STATE = {
        num1: 0,
        num2: 0
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'CHANGE_NUM', num: 'num1', value: formData.num1});
        dispatch({type: 'CHANGE_NUM', num: 'num2', value: formData.num2});
        // alert(`num1: ${formData.num1} num2: ${formData.num2}`);
        setFormData(INITIAL_STATE);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({...formData, [name]: value}));
    }

    // {
    //     type: 'CHANGE_NUM',
    //     num: 'num2',
    //     value: 5
    // }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="num1">Num1:</label>
            <input 
                id="num1" 
                name="num1" 
                value={formData.num1} 
                onChange={handleChange} 
                type="number"
            />
            <label htmlFor="num2">Num2:</label>
            <input 
                id="num2"
                name="num2" 
                value={formData.num2} 
                onChange={handleChange} 
                type="number" 
            />
            <button>Change Numbers</button>
        </form>
    );

}

export default NumberInput;