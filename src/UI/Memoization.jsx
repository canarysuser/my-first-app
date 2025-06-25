import { Box, Button, Heading } from "grommet";
import React from "react";

function CountButton({ onClick, count, name }) {
    console.log('CountButton rendered', name);
    return (
        <Button type="button"
            primary
            label={'Count ' + count}
            onClick={onClick}
            margin='small'
            name={name}>

        </Button>
    )
}
function NonMemoizedCounter() {
    const [count1, setCount1] = React.useState(0);
    const [count2, setCount2] = React.useState(0);
    const increment1 = () => { console.log("NMC.increment1"); setCount1(c => c + 1); }
    const increment2 = () => { console.log("NMC.increment2"); setCount2(c => c + 1); }
    return (
        <>
            <CountButton count={count1} onClick={increment1} name="Count1" />
            <CountButton count={count2} onClick={increment2} name="Count2" />
        </>
    )
}

const MemoizedButton = React.memo(function MemoizedButton(
    { onClick, count, name}
){ 
    console.log('MemoizedButton rendered', name);
    return (
        <Button type="button"
            color='red' 
            fill='true'
            label={'Count ' + count}
            onClick={onClick}
            margin='small'

            name={name}>
        </Button>
    )
})
function MemoizedCounter() {
    const [count1, setCount1] = React.useState(0);
    const [count2, setCount2] = React.useState(0);
    const increment1 = React.useCallback(
         () => { 
            console.log("MC.increment1"); 
            setCount1(c => c + 1); 
        }, [count1]
    );
    const increment2 = React.useCallback(
        () => { console.log("MC.increment2"); setCount2(c => c + 1); }
    , [count2])
    return (
        <>
            <MemoizedButton count={count1} onClick={increment1} name="Count1" />
            <MemoizedButton count={count2} onClick={increment2} name="Count2" />
        </>
    )
}


function MemoizationComponent() {
    return (
        <Box padding='medium' gap='small' direction="column" align='center'>
            <Box direction='column' gap='small' border='all' pad='large'>
                <Heading level='3' size='small' color='red' textAlign='center'>
                    Non-Memoized Counter
                </Heading>
                <NonMemoizedCounter />
            </Box>
            <Box direction='column' gap='small' border='all' pad='large'>
                <Heading level='3' size='small' color='red' textAlign='center'>
                    Memoized Counter
                </Heading>
                <MemoizedCounter />
            </Box>
        </Box>
    )
}

export default MemoizationComponent