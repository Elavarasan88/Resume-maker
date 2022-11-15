import React,{useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {formValue} from '../features/form/formSlice'
import {useDispatch} from 'react-redux'
import {submit} from '../features/form/formSlice.js'
import Header from '../Header'
const InputNo1 = () => {
    const formValues = useSelector(formValue);
    const [values,setValues] = useState(formValues);
    const dispatch = useDispatch();
    const handleChange = (e) =>{
      const {name , value } = e.target  ;
      setValues({
        ...values,
        [name] : value
    })
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
    }
  return (
    <div>
      <Header/>
      <Container>
        <form onSubmit={handleSubmit}>
        <Container1>

        <div>
          <Name><label><p>Name :</p><input required value={values.name} name = "name" onChange={handleChange} type='text' placeholder='  Enter Your Name' ></input></label></Name>
          <SecondName><label><p>Second Name :</p><input value={values.secondName} onChange={handleChange}  name = "secondName" placeholder = " Enter Your Second Name" type='text'></input></label></SecondName>
          <Age><label><p>Age :</p><input value={values.age} name = "age"  placeholder = "Enter Your Age" onChange={handleChange} type='number'></input></label></Age>
          <Email><label><p>Email :</p><input value = {values.email} name = "email" placeholder = "Enter Your Email Id" onChange={handleChange} type='email'></input></label></Email>
        </div>
        <div>
          <FatherName><label><p>Father's Name :</p><input value = {values.fatherName} onChange={handleChange} name = "fatherName" placeholder = "Enter Your Father's Name" type='text'></input></label></FatherName>
          <JobRole><label><p>Job Role :</p><input value = {values.jobRole} name = "jobRole" onChange={handleChange} placeholder = "Enter What Type of job role" type='text'></input></label></JobRole>
          <Nationality><label><p>Nationality :</p><input value = {values.nationality} onChange={handleChange} name = "nationality" placeholder = "Enter Your Nationality" type='text'></input></label></Nationality>
          <MobileNumber><label><p>Mobile Number :</p><input value = {values.mobileNumber} onChange={handleChange} name ="mobileNumber" placeholder = "Enter Your Mobile Number" type='number'></input></label></MobileNumber>
        </div>
        </Container1>
      
        <div>
        <Buttons>
            <Link to={'/'}><button>Previous</button></Link>
            <Link to={'/inputno2'}><button onClick={()=>dispatch(submit(values))} type='submit'>Next</button></Link>
          </Buttons>
        </div>    
        </form>
      </Container>
    </div>
  )
}

export default InputNo1
const Container1 = styled.div`
  display:flex;
  justify-content:space-around;
  padding:50px;
`
const Container = styled.div`
width:100%;
min-height:calc(100vh - 70px);
background-color:lightblue;

`
const Name = styled.div`
  padding:20px;
  p{
    font-size:20px;
    letter-spacing:2px;
    font-weight:normal;
  }

  input{

    ::placeholder {
      color:lightblue;
    }
    margin-top:10px;
    width:300px;
    font-size:16px;
    height:30px;
    border:none;
    border-radius:5px;
    padding:10px;

  }
  input:hover,input:focus{
    background-color:#59788e;
    border:none;
    color:white;
    
  }

`
const SecondName = styled(Name)`

`

const Age = styled(Name)`

`
const Email = styled(Name)`

`
const JobRole = styled(Name)`

`
const MobileNumber = styled(Name)`

`
const FatherName = styled(Name)`

`
const Nationality = styled(Name)`

`
const Buttons = styled.div`
  display:flex;
  align-items : center;
  justify-content:center;
  button{
    margin-left:30px;
    width:200px;
    height:40px;
    border-radius:4px;
    background-color:white;
    letter-spacing:3px;
    border:.3px solid grey;
  }
  button:hover{
    background-color:#59788e;
  }
`
