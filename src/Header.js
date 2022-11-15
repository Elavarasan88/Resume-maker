import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
        <Container>
            <h1>Resume Builder</h1>
        </Container>
    </div>
  )
}

export default Header

const Container = styled.div`
    background-color: #040720;
    height:70px;
    display:flex;
    align-items:center;
    justify-content:center;
    h1{
        font-size:25px;
        color : #ff8c00;
        letter-spacing:2px;
    }
`