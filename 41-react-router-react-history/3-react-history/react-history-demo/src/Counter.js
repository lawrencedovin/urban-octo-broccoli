import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({count: this.state.count + 1});
    }

    decrement() {
        this.setState({count: this.state.count - 1});
    }

    render() {
        const {color} = this.props;
        const {count} = this.state;
        return (
            <div>
                <h1 style={{color}}>I AM COUNTER</h1>
                <h3>Count is: {count}</h3>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Counter;