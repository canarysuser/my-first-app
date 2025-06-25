import React from 'react'
import { Paragraph } from 'grommet'
function Error(props) {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
       <Paragraph color='red' size='large'> Error </Paragraph>
        <Paragraph color='red' size='medium'>
            { props.message || 'An unexpected error occurred. Please try again later.' }
        </Paragraph>
       </div>
  )
}

export default Error