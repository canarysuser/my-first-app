import { Box, Button, Card, CardBody, CardFooter, CardHeader, FormField, Grid, Heading, Text, TextInput } from 'grommet';
import React, { useContext, useEffect, useReducer, useState } from 'react'
import ProductContext from './ProductContext';

//Initial State 
const initialState = {
    name: '',
    email: '',
    location: ''
};
//Action Types 
const NameAction = 'NAME', EmailAction = 'EMAIL', LocAction = 'LOCATION';
//Define the ActionCreators 
export function NameActionCreator(name) {
    return { type: NameAction, payload: name }
}
export function EmailActionCreator(email) {
    return { type: EmailAction, payload: email }
}
export function LocationActionCreator(location) {
    return { type: LocAction, payload: location }
}
//Reducer 
export const PersonReducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case NameAction: return { ...state, name: action.payload }
        case EmailAction: return { ...state, email: action.payload }
        case LocAction: return { ...state, location: action.payload }
        default: return { ...state }
    }
}
//Define the React Context Object 
export const PersonContext = React.createContext();

export function NameComponent() {
    const { dispatch } = useContext(PersonContext);
    const [name, setName] = useState('');
    return (
        <Box direction="column" gap='small' margin={{marginTop:'10px'}} padding='xsmall'>
            <TextInput label='name'
                placeholder='Enter Name'
                type='text'
                size='medium'
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <Button type='button'
                label='Set Name'
                width='medium'
                color='green'
                border='all'
                onClick={(e) => dispatch(NameActionCreator(name))}
            />
        </Box>
    )
}
export function EmailComponent() {
    const { dispatch } = useContext(PersonContext);
    const [email, setEmail] = useState('');
    return (
        <Box direction="column" gap='small' margin={{marginTop:'10px'}} padding='xsmall'>
            <TextInput label='email'
                placeholder='Enter Email'
                type='text'
                size='medium'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <Button type='button'
                label='Set Email'
                width='medium'
                color='green'
                border='all'
                onClick={(e) => dispatch(EmailActionCreator(email))}
            />
        </Box>
    )
}
export function LocationComponent() {
    const { dispatch } = useContext(PersonContext);
    const [location, setLocation] = useState('');
    return (
        <Box direction="column" gap='small' margin={{marginTop:'10px'}} padding='xsmall'>
            <TextInput label='location'
                placeholder='Enter Location'
                type='text'
                size='medium'
                value={location}
                onChange={(e) => setLocation(e.target.value)} />
            <Button type='button'
                label='Set Location'
                width='medium'
                color='green'
                border='all'
                onClick={(e) => dispatch(LocationActionCreator(location))}
            />
        </Box>
    )
}

export function ContextComponent1() { 
    const {state} = useContext(PersonContext);
    return (
        <Card height='500' width='medium' background='dark-1'>
                <CardHeader pad='xsmall' margin='xsmall'>
                    <Heading level='2' padding='xsmall'
                         textAlign='center' margin='xsmall'>Context Component 1
                        </Heading>
                    </CardHeader>
                <CardBody pad='medium' background='light-1'>
                    <NameComponent />
                    <hr/>
                    {
                        state.name && 
                        <EmailComponent/>
                    }
                    { 
                        state.name && state.email && 
                        <LocationComponent/>
                    }
                    <hr />
                </CardBody>
                <CardFooter pad='medium' background='dark-3' direction='column'>
                    <Text color='white' size='medium'>Person Name: {state.name}</Text>
                    <Text color='white' size='medium'>Email: {state.email}</Text>
                    <Text color='white' size='medium'>Location: {state.location}</Text>

                </CardFooter>
            </Card>
    )
}

export function ContextComponent2() { 
    const {state, dispatch} = useContext(PersonContext);
    const product = useContext(ProductContext)
   
    // const submitData =() => {
    //     //call the API 
    //     dispatch({type:'updateProduct', payload: 'selectedProduct'})
    // }
    //console.log(product.state);
    return (
        <Card height='500' width='medium' background='dark-1'>
                <CardHeader pad='xsmall' margin='xsmall'>
                    <Heading level='2' padding='xsmall'
                         textAlign='center' margin='xsmall'>Context Component 2
                        </Heading>
                    </CardHeader>
                <CardBody pad='medium' background='light-1'>
                    <NameComponent />
                    <hr/>
                    {
                        state.name && 
                        <EmailComponent/>
                    }
                    { 
                        state.name && state.email && 
                        <LocationComponent/>
                    }
                    <hr />
                </CardBody>
                <CardFooter pad='medium' background='dark-3' direction='column'>
                    <Text color='white' size='medium'>Person Name: {state.name}</Text>
                    <Text color='white' size='medium'>Email: {state.email}</Text>
                    <Text color='white' size='medium'>Location: {state.location}</Text>

                </CardFooter>
            </Card>
    )
}

function ContextComponent() {
    const [state, dispatch] = useReducer(PersonReducer, initialState);
    useEffect(()=>{
        //get data from API 
        //dispatch({type: 'ProductList', payload: []})
    }, [])
    return (
        <PersonContext.Provider value={{state, dispatch}}>
            <Grid areas={[
            { name: 'list', start: [0, 0], end: [0, 0] },
            { name: 'details', start: [1, 0], end: [1, 0] },
        ]} columns={['medium', 'medium']}
            rows={['full']}
            border={{ color: 'blue', style: 'solid', side: 'all' }}
            gap='small' fill='horizontal' pad='small'>
                <Box gridArea='list'>
                    <ContextComponent1/>
                </Box>
                 <Box gridArea='details'>
                    <ContextComponent2/>
                </Box>
            </Grid>
        </PersonContext.Provider>
    )
}

export default ContextComponent