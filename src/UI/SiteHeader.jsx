import { Anchor, Box, Header, Nav } from 'grommet'
import React from 'react'

function SiteHeader() {
  return (
    <Header background='brand' pad='small'>
        <Box direction='row' align='center' gap='small'>
            <Anchor color='white' href='/'>React Grommet App</Anchor>
        </Box>
        <Nav direction='row'>
            <Anchor color='white' href='/products'>Products</Anchor>
            <Anchor color='white' href='/about'>About</Anchor>
            <Anchor color='white' href='/contact'>Contact</Anchor>
        </Nav>
    </Header>
  )
}

export default SiteHeader