import React from 'react';
import { useSelector } from 'react-redux';

const Math = () => {

    const {num1, num2} = useSelector(state => ({
        num1: state.num1,
        num2: state.num2
    }));

    const math = (num1, num2, expression) => {
        switch(expression) {
            case 'SUM':
                return num1 + num2;
            case 'DIFFERENCE':
                return num1 - num2;
            case 'PRODUCT':
                return num1 * num2;
            case 'QUOTIENT':
                return num1 / num2;
            default:
                return 0;
        }
    }

    return (
        <>
            <h1>MATHHHHHH (◡ ω ◡)</h1>
            <ul>
                <li>SUM: {math(num1, num2, 'SUM')}</li>
                <li>DIFFERENCE: {math(num1, num2, 'DIFFERENCE')}</li>
                <li>PRODUCT: {math(num1, num2, 'PRODUCT')}</li>
                <li>QUOTIENT: {math(num1, num2, 'QUOTIENT')}</li>
            </ul>
        </>
        
    )

}

export default Math;