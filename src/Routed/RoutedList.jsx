import React, { useState, useEffect, useContext, useReducer } from 'react'
import {
    Box, 
    Button,
    DataTable,
    Heading,
    Spinner,
    Text
} from 'grommet'
import { Navigate, useNavigate } from 'react-router-dom'
import * as service from '../lib/services/ProductApiService';
import ProductContext, { allProductsAction } from '../StateManagement/ProductContext';
import { productActions } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBeginActionCreator, getAllEndActionCreator } from '../store/store-rtk-config';
//import routes from '../lib/AppRoutes';

function RoutedList() {
    //const {state, dispatch} = useContext(ProductContext);
    const state = useSelector(state=>state.products);
    
    const dispatch = useDispatch();
    const [productListState, setProductListState] = React.useState([])
    const navigate = useNavigate();

    useEffect(() => {
        // Simulating an API call to fetch product data
        const fetchProducts = async () => {
            try {
               // console.log('state.items', state.items)
                //if(state.items) {
                // Replace with actual API call
                //const response = await service.getProducts();
               // dispatch(allProductsAction(response));
               // }
                //var list =await productActions.getAllProducts(dispatch);
                //console.log(list);

                //setProductListState(list);

                //WITH RTK Config 
                dispatch(getAllBeginActionCreator({}));
                var list = await service.getProducts();
                dispatch(getAllEndActionCreator({items: list}))

            } catch (error) {
               // console.error("Error fetching products:", error);
                navigate('/error')
            }
        };
        fetchProducts();
    }, []);

    if(state.loadingState.isLoading && state.loadingState.action=='All') { 
        //if(state.loadingState.isLoading && state.loadingState.action=='All')
            return <Spinner color='black' message='Loading data' size='xlarge' />
    }
    const handleView = async (productId) => {
        await productActions.getByIdProducts(dispatch, productId);
        navigate(`/routed/details/${productId}`);
    }
    return (
        <>
            <Heading level='4' textAlign='center'>
                Product List
            </Heading>
            <Text size='large'>All products available in the store are listed here.</Text>
            <DataTable columns={[
                { property: 'productName', header: 'Product Name', primary: true },
                { property: 'unitPrice', header: 'Unit Price', primary: true },
                {
                    property: 'actions', header: 'Actions',
                    render: (row) => (
                        <Box direction='row' gap='small'>
                            <Button primary label='View' size='small'
                                onClick={() => handleView(row.productId)} />
                            <Button secondary label='Edit' size='small'
                                onClick={() => console.log(`View ${row.productId}`)} />
                        </Box>
                    )
                }
            ]} data={state.items} >
            </DataTable>
        </>
    )
}

export default RoutedList