import React,{useRef} from 'react';
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import { formValue} from './features/form/formSlice';


const Resume = () => {
    const value = useSelector(formValue)
  return (
    <div>
        <Container >
            <Header>
                <RightHeader>
                    <h1>{value.name} {value.secondName}</h1>
                </RightHeader>
                <LeftHeader>
                        <p>{value.address}</p>
                        <p>{value.pincode}</p>
                        <p>{value.mobileNumber}</p>
                        <p className='email' >{value.email}</p>
                </LeftHeader>
            </Header>
            <hr></hr>
            <Content>
                <div>
                    <SideHeading>CARRIER OBJECTIVE :</SideHeading>
                    <p className='content' id='carrier'>Obtaining a place as a {value.jobRole} in your company where i can learn any new things and develop my knowledge and skills along with good attitude</p>
                </div>
                <div>
                    <SideHeading>CARRIER :</SideHeading>
                    <div className='content'>
                    <Program>{value.course}</Program>
                    <p>{value.college}</p>
                    <p>{value.collegeYear}</p>
                    <br></br>
                    <Program>Higher Secondary(XII)</Program>
                    <p>{value.higherSecondary}</p>
                    <p>Year Of Completion : {value.higherSecondaryPassedOut}</p>
                    <p>Percentage : {value.higherSecondaryPercentage}</p>
                    <br></br>
                    <Program>SSLC (X)</Program>
                    <p>{value.sslc}</p>
                    <p>Year Of Completion : {value.sslcPassedOut}</p>
                    <p>Percentage : {value.sslcPercentage}</p>
                    </div>
                </div>
                <div>
                    <SideHeading>SKILLS :</SideHeading>
                    <div className='content'>
                    <ul>
                        {   
                            value.technicalSkills.split(',').map(function(n){
                                return(
                                    <li>{n}</li>
                                )
                            })  
                        }
                    
                    </ul>
                    </div>
                </div>
                <div>
                    <SideHeading>PERSONAL SKILLS</SideHeading>
                    <div className='content'>
                    <ul>
                    {   
                            value.personalSkills.split(',').map(function(n){
                                return(
                                    <li>{n}</li>
                                )
                            })  
                        }
                        
                    </ul>
                    </div>
                    
                </div>
                <div>
                    <SideHeading>PERSONAL DETAILS</SideHeading>
                    <div className='content'>
                    <ul>
                        <li>FATHER'S NAME : {value.fatherName} </li>
                        <li>NATIONALITY : {value.nationality} </li>
                        <li>LANGUAGE KNOWN :{value.languageKnow}</li>
                        <li>GITHUB PAGE :</li>
                    </ul>
                    </div>
                </div>
                

            </Content>
            <hr></hr>
        </Container>
        
    </div>
  )
}

export default Resume
const Container = styled.div`
    width : 210mm;
    height : 297mm;
    background-color:#f2f3f4;
    padding : 2% 2% 2% 2%;
    letter-spacing:1px;

`
const Header = styled.div`
    display : flex;
    justify-content:space-between;
    margin-bottom:10px;

`

const RightHeader = styled.div`
    text-transform : uppercase;

`
const LeftHeader = styled.div`
    text-align : right;
    text-transform : capitalize;
    .email{
        text-transform :lowercase;
    }

`
const SideHeading = styled.h2`
    margin : 20px 0 10px 0;
`
const Content = styled.div`
    margin-bottom:10px;
    #carrier{
        line-height:25px;
    }
    .content{
        margin-left : 30px;
        p{
            padding-top:8px;
        }
        li{
            margin-top : 8px; 
            text-transform : capitalize; 
        }

    }

`
const Program = styled.h4`

`