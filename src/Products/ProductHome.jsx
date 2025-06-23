import React from 'react'
import * as service from '../lib/services/ProductListService';
import { Box, Button, Grid, Heading} from 'grommet';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';


function ProductHome() {

    //state 
    const [products, setProducts] = React.useState([]);
    const [selectedProduct, setSelectedProduct] = React.useState(null);

    const handleClick = () => {
        console.log("Button clicked");
        // Fetch products from the service
        const productList = service.getProducts();
        setProducts(productList);
        console.log(productList);
    }
    const onHomeSelect = (productId) => { 
        let item = service.getProductById(productId);
        setSelectedProduct({...item});
    }
    const onHomeEdit = (productId) => {
        let item = service.getProductById(productId);
        setSelectedProduct({...item});
    }
    const onSubmit= (product) => {
        console.log("Product submitted: ", product);
        
        service.updateProduct(product);

        setSelectedProduct(null); // Clear selection after submit
        let list = service.getProducts();
        setProducts(list);
    }
  return (
    <Grid areas={[
        {name:'list', start: [0, 0], end: [0, 0]},
        {name: 'details', start: [1, 0], end: [1, 0]},
    ]} columns={['medium', 'flex']} 
        rows={['full']}
        border={{color:'blue', style:'solid', side:'all'}}
        gap='small' fill='horizontal' pad='small'>
        <Box gridArea='list' border='all'>
        <Button type='button' label='Fetch Products' secondary 
            onClick={() => handleClick()}/>
            <ProductList products={products} 
                viewClick={onHomeSelect}
                editClick={onHomeEdit}/>
        </Box>
        <Box gridArea='details' border='all'>
            <Heading level='3' size='small' color='red' textAlign='center'>
                Product Details
            </Heading>
            {JSON.stringify(selectedProduct) }
            <ProductDetails selectedProduct={selectedProduct}
            onSubmit={onSubmit}/>
        </Box>

    </Grid>
  )
}

export default ProductHome