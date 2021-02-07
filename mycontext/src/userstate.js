import React, {Component, useState, useReducer} from 'react'

class CountClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <p>Bạn đã bấm {this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Bấm vào đây
                </button>
            </div>
        )
    }
}

const Count = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Bạn đã bấm {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Bấm vào đây
            </button>
        </div>
    )
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            if(state.count > 0) return {count: state.count - 1};
            else return {count: 0};
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    );
}

export {
    CountClass,
    Counter,
    Count
}
