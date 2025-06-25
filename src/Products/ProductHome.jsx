import React, { useEffect } from 'react'
import { Box, Button, Grid, Heading } from 'grommet';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import * as service from '../lib/services/ProductListService';
import * as apiService from '../lib/services/ProductApiService';


function ProductHome(props) {

    //state 
    const [products, setProducts] = React.useState([]);
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [isEditMode, setIsEditMode] = React.useState(false);

    async function fetchProducts() {
        try {
            var list = await apiService.getProducts();
            setProducts(list);
            console.log("Products fetched: ", list);
        } catch (error) {
            //console.error("Error fetching product by ID:", error);
            //alert("Failed to fetch product details. Please try again later.");
            props.setErrorStatus(true);
            props.setErrorMessage("Failed to fetch products. Please try again later.");
        }
    }

    async function fetchProductById(id) {
        try {
            let item = await apiService.getProductById(id);
            setSelectedProduct({ ...item });
        } catch (error) {
            
            console.error("Error fetching product by ID:", error);
            alert("Failed to fetch product details. Please try again later.");
        }
    }
    useEffect(() => {

        fetchProducts();
    }, []);  //runs only once, after initial render

    const handleClick = () => {
        console.log("Button clicked");
        // Fetch products from the service
        const productList = service.getProducts();
        setProducts(productList);
        console.log(productList);
    }
    const onHomeSelect = (productId) => {
        // let item = service.getProductById(productId);
        // setSelectedProduct({...item});
        fetchProductById(productId);
        setIsEditMode(false);

    }
    const onHomeAddNew = () => {
        setSelectedProduct({
            productId: 0, id: 0, productName: '', unitsInStock: 0, unitPrice: 0, discontinued: false
        }); // Clear selection
        setIsEditMode(true); // Set to edit mode for new product
        console.log("Add New Product clicked");
    }
    const onHomeEdit = (productId) => {
        // let item = service.getProductById(productId);
        // setSelectedProduct({...item});
        fetchProductById(productId);
        setIsEditMode(true);
    }
    const onSubmit = async (product) => {
        console.log("Product submitted: ", product);
        //service.updateProduct(product);
        await apiService.upsertProduct(product);
        //setSelectedProduct({productName:'Unassigned', unitsInStock:999, unitPrice:999}); // Clear selection after submit
        setSelectedProduct(null);
        // let list = service.getProducts();
        // setProducts(list);
        await fetchProducts();
        setIsEditMode(false);
    }
    return (
        <Grid areas={[
            { name: 'list', start: [0, 0], end: [0, 0] },
            { name: 'details', start: [1, 0], end: [1, 0] },
        ]} columns={['medium', 'flex']}
            rows={['full']}
            border={{ color: 'blue', style: 'solid', side: 'all' }}
            gap='small' fill='horizontal' pad='small'>
            <Box gridArea='list' border='all'>
                <Button type='button' label='Fetch Products' secondary
                    onClick={() => handleClick()} />
                <ProductList products={products}
                    viewClick={onHomeSelect}
                    editClick={onHomeEdit}
                    addNewClick={onHomeAddNew} {...props} />
            </Box>
            <Box gridArea='details' border='all'>
                <Heading level='3' size='small' color='red' textAlign='center'>
                    Product Details
                </Heading>
                {JSON.stringify(selectedProduct)}
                <ProductDetails
                    selectedProduct={selectedProduct}
                    onSubmit={onSubmit}
                    isInEditMode={isEditMode} {...props} />
            </Box>

        </Grid>
    )
}

export default ProductHome