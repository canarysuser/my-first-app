import { Box, Heading, Paragraph } from 'grommet';
import React, { useReducer, useState } from 'react'

const initialCounterState = 0;

//Initial state 
const initialState = {
    // r1: {counter: 0},
    // r2: {counter: 500}
    counter:1
}

// Define action type constants 
const INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    DIVIDE = 'DIVIDE',
    MULTIPLY = 'MULTIPLY';

//Define the reducer function. 
//Should be a pure function (given the same input, it should always return the same output)
//takes the current state and an action, and returns a new state
//merges the current state with the new state and returns it. 
//should not mutate the current state.
//reducer functions should not return null or undefined,
const MyReducer = (state, action) => {
    //state = state || initialState;
    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case DECREMENT:
            return { ...state, counter: state.counter - 1 };
        default:
            return state; //return the current state if action is not recognized
    }
}

const Reducer2 = (state, action) => {
    //state = state || initialState;
    switch (action.type) {
        case DIVIDE:
            return { ...state, counter: state.counter / 2 };
        case MULTIPLY:
            return { ...state, counter: state.counter * 2 };
        default:
            return state; //return the current state if action is not recognized
    }
}
const combineReducers = (reducers) => (state, action) => {
    let nextState = {};
    for(let key in reducers) {
        let previousStateForKeu = state[key];
        let nextStateForKey = reducers[key](previousStateForKeu, action);
        nextState[key] = nextStateForKey;
    }
    console.log('Next State',nextState)
    return nextState;
}
const reducer = combineReducers({
        MyReducer,
        Reducer2    
    })

// const reducer = (state,action) => { 
//     state= { 
//         ...state, 
//         ...MyReducer(state, action),
//         ...Reducer2(state,action)
//     }
// }
function AnotherComponent() {
    console.log('reducers', reducer)
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)
    //const [state2, dispatch2] = useReducer(Reducer2, { counter: 100 });
    return (
        <Box pad='medium' background='light-2' direction='column' gap='small' align='center'>
            <Heading level='2' color='blue'>Another Component</Heading>
            <Paragraph size='large'>MyReducer Counter: {state.counter}</Paragraph>
            <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
            <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
            {/* <Paragraph size='large'>Reducer2: {state.r2.counter}</Paragraph> */}
            <button onClick={() => dispatch({ type: DIVIDE })}>Divide</button>
            <button onClick={() => dispatch({ type: MULTIPLY })}>Multiply</button>
        </Box>
    );
}
function SimpleReducer() {
    const [counter, setCounter] = useState(initialCounterState);
    const [state, dispatch] = useReducer(MyReducer, initialState);

    return (
        <Box pad='medium' background='light-2' direction='column' gap='small' align='center'>
            <Heading level='1' color='red' textAlign='center'>
                Simple Reducer Example
            </Heading>
            <Box direction='row' align='center' gap='small' >
                <Box direction='column' gap='small' border='all' pad='large' >
                    <Heading level='4' color='dark-3' padding='small' margin='small'>
                        Without Reducer
                    </Heading>
                    <Paragraph size='xxlarge' color='dark-4'>
                        Counter {counter}
                    </Paragraph>
                    <button onClick={() => setCounter(counter + 1)}> Increment </button>
                    <button onClick={() => setCounter(counter - 1)}> Decrement </button>
                </Box>
                <Box direction='column' gap='small' border='all' pad='large'>
                    <Heading level='4' color='dark-3' padding='small' margin='small'>
                        With Reducer
                    </Heading>
                    <Paragraph size='xxlarge' color='dark-4'>
                        Counter {state.counter}
                    </Paragraph>
                    <button onClick={() => dispatch({ type: INCREMENT })}> Increment </button>
                    <button onClick={() => dispatch({ type: DECREMENT })}> Decrement </button>
                </Box>
                <AnotherComponent />
            </Box>
        </Box>
    )
}

export default SimpleReducer