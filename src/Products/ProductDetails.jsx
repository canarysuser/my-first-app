import { Box, Button, CheckBox, Form, FormField, Heading, RangeInput, Text } from 'grommet'
import React, { useEffect } from 'react'

function ProductDetails(props) {
    const [model, setModel] = React.useState({ ...props.selectedProduct });
    const handleChange = (event) => {
        event.preventDefault();
        setModel({
            ...model,
            [event.target.name]: event.target.value
        });
    }
    //runs immediately after the component is rendered for the first time
    // or re-rendered subsequently.
    useEffect(() => {
        if (model && model.productId !== props.selectedProduct?.productId) {
            setModel({ ...props.selectedProduct });
        }
    }, [props.selectedProduct]);

    const formSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data: ", model);
        props.onSubmit(model);
    }
    return (
        <>
            <Heading level='3' size='small' color='red' textAlign='center'>
                Product Details
            </Heading>
            <Form onSubmit={formSubmit} noValidate
                messages={{
                    required: 'This field is required'

                }}
                color='red' >
                <FormField label='Product Name'
                    name='productName'
                    value={model?.productName || ''}
                    onChange={handleChange}
                    readOnly={!props.isInEditMode}
                    required
                />
                <FormField label='Stock'
                    name='unitsInStock'
                    value={model?.unitsInStock || 0}
                    onChange={handleChange}
                    min={1} 
                    max={500}
                    required
                    validate={()=>{
                        if (model?.unitsInStock < 1 || model?.unitsInStock > 500) {
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
                    value={model?.unitPrice || 0}
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
        </>
    )
}

export default ProductDetails