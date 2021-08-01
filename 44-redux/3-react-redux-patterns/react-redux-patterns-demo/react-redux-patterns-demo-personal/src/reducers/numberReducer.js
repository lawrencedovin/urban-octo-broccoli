const INITIAL_STATE = {
    num1: 5,
    num2: 7
}

const numberReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CHANGE_NUM':
            return {...state, [action.num]: action.value}
        default:
            return state;
    }
}

export default numberReducer;

// {
//     type: 'CHANGE_NUM',
//     num: 'num2',
//     value: 5
// }