import { Box, Button, CheckBox, Form, FormField, Heading } from 'grommet'
import React, { useEffect } from 'react'

function ProductDetails(props) {
    const [model, setModel] = React.useState({...props.selectedProduct});
    const handleChange=(event)=>{
        event.preventDefault(); 
        setModel({
            ...model,
            [event.target.name]: event.target.value
        });
    }
    //runs immediately after the component is rendered for the first time
    // or re-rendered subsequently.
    useEffect(() =>{
        if(model && model.productId!== props.selectedProduct?.productId) {
            setModel({...props.selectedProduct});
        }
    },[props.selectedProduct]);

    const formSubmit = (e) =>{
        e.preventDefault();
        console.log("Form submitted with data: ", model);
        props.onSubmit(model);
    }
  return (
    <>
     <Heading level='3' size='small' color='red' textAlign='center'>
            Product Details
        </Heading>
       <Form onSubmit={formSubmit}>
        <FormField label='Product Name'
            name='productName'
            value={model?.productName || ''}
            onChange={handleChange}
            />
             <FormField label='Stock'
            name='unitsInStock'
            value={model?.unitsInStock || 0}
            onChange={handleChange}
            />
             <FormField label='Price'
            name='unitPrice'
            value={model?.unitPrice ||0}
            onChange={handleChange}
            />
            <CheckBox checked={model?.discontinued}
            label='Discontinued'
            name='discontinued'
            onChange={handleChange}/>
            
            <Box direction='row' align='center'
                justify="center" gap='small' 
                margin={{top:'medium'}}>
                <Button type='submit' primary label='Submit'/>
                <Button type='reset' label='Reset'/>
            </Box>
            
       </Form>
    </>
  )
}

export default ProductDetails