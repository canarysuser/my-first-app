import { Box, CheckBox, Form, FormField, Heading, Text, Button, RangeInput } from 'grommet'
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router';
import * as apiService from '../lib/services/ProductApiService';
import ProductContext from '../StateManagement/ProductContext';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../store/actions';

 function RoutedDetails() {
    const state = useSelector(state=>state.products);
    const dispatch=useDispatch(); 

    const [model, setModel] = useState({})
    const [canNavigate, setCanNavigate] = useState(false);
    const { id } = useParams();
 //const {state, dispatch} = useContext(ProductContext);

    
    useEffect(() => {
   async function fetchProductById() {
        try {
            if(!id) throw new Error("Product ID is required");
            setModel({...state.selectedItem})
            
        } catch (error) {
            setCanNavigate(true);
            // console.error("Error fetching product by ID:", error);
            // alert("Failed to fetch product details. Please try again later.");
        }
    }
    fetchProductById();
            
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const formSubmit = (e) => {
        e.preventDefault(); 
        setCanNavigate(true);
    }
    const handleChange = (event) => {

    }
    if(canNavigate) {
        return <Navigate to={`/routed/list`} replace={true} />
    }
   // console.log(state.items);
    return (
        <div>
            <Heading level='2' style={{ backgroundColor: 'black' }} color='yellow' textAlign='center'>
                Product Details
            </Heading>
            <Text color='blue' size='large' textAlign='center'>
                Routed Values are: {id}
            </Text>
            <Box direction='row' align='center' gap='large' justify='center'>
            <Form onSubmit={formSubmit} noValidate
                messages={{
                    required: 'This field is required'

                }}
                color='red' >
                <FormField label='Product Name'
                    name='productName'
                    value={model.productName || ''}
                    onChange={handleChange}
                    required
                />
                <FormField label='Stock'
                    name='unitsInStock'
                    value={model.unitsInStock || 0}
                    onChange={handleChange}
                    min={1}
                    max={500}
                    required
                    validate={() => {
                        if (model.unitsInStock < 1 || model.unitsInStock > 500) {
                            return 'Units in stock must be between 1 and 500';
                        }
                        return undefined;
                    }}
                    validateOn="change"
                />
                <FormField label='Price'
                    name='unitPrice'
                    component={RangeInput}
                    min={1} max={1000} step={10}
                    value={model.unitPrice || 0}
                    onChange={handleChange}
                />
                <Text size='xsmall' color='dark-1'>{model?.unitPrice || 0}</Text>
                <CheckBox checked={model?.discontinued}
                    label='Discontinued'
                    name='discontinued'
                    onChange={handleChange} />

                <Box direction='row' align='center'
                    justify="center" gap='small'
                    margin={{ top: 'medium' }}>
                    <Button type='submit' primary label='Submit' />
                    <Button type='reset' label='Reset' />
                </Box>

            </Form>
            </Box>
        </div>
    )
}

export default RoutedDetails