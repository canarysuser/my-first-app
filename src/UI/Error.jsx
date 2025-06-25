import React from 'react'
import { Paragraph } from 'grommet'
import { useSelector } from 'react-redux'
function Error(props) {
  const state = useSelector(state=>state.errors);
  console.log(state)
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
       <Paragraph color='red' size='large'> Error </Paragraph>
        <Paragraph color='red' size='medium'>
            {/* { props.message || 'An unexpected error occurred. Please try again later.' } */}
            {state.message.message}
        </Paragraph>
       </div>
  )
}

export default Error