import  styled  from 'styled-components'
import React from 'react'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;

`


function Announcement() {
  return (
    <Container>
        Super deal! Free Shipping on order over $50
    </Container>
  )
}

export default Announcement