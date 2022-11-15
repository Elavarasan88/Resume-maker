import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Header from '../Header'

const Welcome = () => {
  return (
    <div>
        <Header/>
        <Container>
            <p>Knock The Interview</p>
            <div>
                <img alt='' src='https://cdn.pixabay.com/photo/2018/05/09/22/40/career-3386334__340.jpg'/>
                <ul>
                    <li><span>•</span>Make resume in few minutes,</li>
                    <li><span>•</span>Just a simple questions,</li>
                    <li><span>•</span>Congradulations! for your Interviews.</li>
                </ul>
            </div>
            <Link to={'/inputno1'} ><button>START THE PROCESS</button></Link>
        </Container>
    </div>
  )
}

export default Welcome
const Container = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    padding:60px;
    p{
        text-transform:uppercase;
        letter-spacing:7px;
        font-size:16px;
    }
    div{
        display:flex;
        margin:20px;
        img{
            border-radius:10px;
        }

        ul{
            list-style-type:none;
            li{
                text-align:left;
                margin:60px;
                font-size:23px;
                color:#040720;
                margin-left:200px;
                
                span{
                    margin-right:20px;
                    font-size:30px;
                    color:#ff8c00;
                }}}
    }

    button{
        height:50px;
        width:500px;
        color:white;
        letter-spacing:5px;
        font-size:20px;
        border-radius:20px;
        background-color:#040720;

        &:hover{
            opacity:80%;
        }
        
    }

`