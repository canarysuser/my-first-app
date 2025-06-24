import { Button, Heading, Table, TableBody, TableCell, TableHeader, TableRow } from 'grommet'
import React from 'react'

function ProductList(props) {
  return (
    <>
    <Heading level='3' size='small' color='red' textAlign='center'>
            Product List
        </Heading>
        <Button type='button' label='Add New Products' secondary
            onClick={props.addNewClick} />
     <Table margin='5px'>
            <TableHeader>
                <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Unit Price</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.products.map(product => (
                    <TableRow key={product.productId}>
                        <TableCell>{product.productName}</TableCell>
                        <TableCell>{product.unitPrice}</TableCell>
                        <TableCell>
                            <Button primary label='View' size='small'
                            onClick={()=>props.viewClick(product.productId)} />
                            <Button secondary label='Edit' size='small'
                            onClick={()=>props.editClick(product.productId)} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
     </Table>
    </>
  )
}

export default ProductList