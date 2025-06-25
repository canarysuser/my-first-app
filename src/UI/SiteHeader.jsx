import { Anchor, Box, Header, Nav } from 'grommet'
import React from 'react'
import { Link } from 'react-router'
import routes from '../lib/AppRoutes'

function SiteHeader() {
  return (
    <Header background='brand' pad='small' >
        <Box direction='row' align='center' gap='small'>
            <Anchor color='white' href='/'>React Grommet App</Anchor>
        </Box>
        <Nav direction='row'>
            {/* <Anchor color='white' href='/products'>Products</Anchor>
            <Anchor color='lemonchiffon' href='/routed/list'>Routed List</Anchor>
            <Anchor color='black' href='/routed/details/1'>Routed Details</Anchor>
            <Link to='/lifecycle'>Lifecycle</Link>
            <Link to='/memoization' >Memoization</Link>
            <Link to='/simple' >Simple Reducer</Link>
            <Link to='/simple' >Simple Reducer</Link> */}
            {
              routes.map((value, index)=>(
                (value.linkVisible) ?
                <Link key={index} to={value.path}>{value.name}</Link>
                : ""
              ))
            }
        </Nav>
    </Header>
  )
}

export default SiteHeader