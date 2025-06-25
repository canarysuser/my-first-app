import { Box, Heading, Paragraph } from 'grommet';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DecrementAction, IncrementAction } from '../store/actions';

function CounterStoreComponent() {

    const state = useSelector(state => state.counter);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({type:'Reset'})
    }, [])

    return (
        <Box direction='column' gap='small' border='all' pad='large'>
            <Heading level='4' color='dark-3' padding='small' margin='small'>
                With Redux Store
            </Heading>
            <Paragraph size='xxlarge' color='dark-4'>
                Counter {state.counter}
            </Paragraph>
            <button onClick={() => dispatch(IncrementAction(5))}> Increment </button>
            <button onClick={() => dispatch(DecrementAction(1))}> Decrement </button>
        </Box>
    )
}

export default CounterStoreComponent