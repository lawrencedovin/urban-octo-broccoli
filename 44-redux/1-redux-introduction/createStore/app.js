// Set Initial State to {count: 0}
// Make Reducer (state, action)
// action.type updates count
// windows.onload function
// contains addEventListener for buttons 
// getState().count

const INITIAL_STATE = {count: 0};

const countReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {...state, count: state.count += 1}
        case 'DECREMENT':
            return {...state, count: state.count -= 1}
        default:
            return state
    }
}

const store = Redux.createStore(countReducer);

window.onload = () => {
    const counterElement = document.querySelector('h2');
    
    document.querySelector('#increment')
        .addEventListener('click', () => {
            store.dispatch({type: 'INCREMENT'});
            const currentCount = store.getState().count;
            counterElement.innerText = currentCount;
        })
    document.querySelector('#decrement')
        .addEventListener('click', () => {
            store.dispatch({type: 'DECREMENT'});
            const currentCount = store.getState().count;
            counterElement.innerText = currentCount;
        })
}