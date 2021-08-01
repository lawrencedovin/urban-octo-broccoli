import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import './NumberInput.css';

const NumberInput = () => {

    const dispatch = useDispatch();
    const { num1, num2 } = useSelector(state => ({
      num1: state.num1,
      num2: state.num2
    }), shallowEqual)

    const [inputs, setInputs] = useState({ num1, num2 })
    const handleChange = e => {
      const { value, name } = e.target;
      setInputs(inputs => ({ ...inputs, [name]: +value }))
    }
    const changeNum = (num) => {
        dispatch({
            type: 'CHANGE_NUM',
            num,
            value: inputs[num]
        });
    }

    return (
        <div>
          <div>
            <label htmlFor="num1">First Number:</label>
            <input
              type="number"
              id="num1"
              value={inputs.num1}
              name="num1"
              onChange={handleChange}
            />
            <button onClick={() => changeNum('num1')}>Update</button>
          </div>
    
          <div>
            <label htmlFor="num2">First Number:</label>
            <input
              type="number"
              id="num2"
              value={inputs.num2}
              name="num2"
              onChange={handleChange}
            />
            <button onClick={() => changeNum('num2')}>Update</button>
          </div>
        </div>
      )
    }

export default NumberInput;