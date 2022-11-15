import React,{useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {formValue} from '../features/form/formSlice'
import {useDispatch} from 'react-redux'
import {submit} from '../features/form/formSlice.js'
import Header from '../Header'

const InputNo2 = () => {
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
            <College><label><p>College :</p><input onChange={handleChange} value ={values.college} name = "college" placeholder='Enter Your College Name' type='text'></input></label></College>
            <Course><label><p>Course :</p><input onChange={handleChange} value = {values.course} name = "course" placeholder='Enter Course Name' type='text'></input></label></Course>
            <CollegeYear><label><p>Years :</p><input onChange={handleChange} value = {values.CollegeYear} name = "collegeYear" placeholder = "College Passed Out Year" type='numbers'></input></label></CollegeYear> 
          </div> 
          <div> 
            <SeniorSecondary><label><p>Higher Secondary :</p><input onChange={handleChange} value = {values.higherSecondary} name = "higherSecondary" placeholder='Higher Secondary School Name' type='text'></input></label></SeniorSecondary>
            <SecondaryYear><label><p>Passed Out Year :</p><input onChange={handleChange} value = {values.higherSecondaryPassedOut} name = "higherSecondaryPassedOut" placeholder = "Passed Out Year" type='numbers'></input></label></SecondaryYear>
            <Percentage12><label><p>Mark-Percentage :</p><input onChange={handleChange} value = {values.highterSecondaryPercentage} name = "higherSecondaryPercentage" placeholder = "Mark in Percentage" type='numbers'></input></label></Percentage12>
          </div> 
          <div> 
            <SSLC><label><p>SSLC :</p><input onChange={handleChange} value = {values.sslc} name ="sslc" placeholder='Enter Your School Name' type='text'></input></label></SSLC>
            <SSLCYear><label><p>Passed Out Year :</p><input onChange={handleChange} value = {values.sslcPassedOut} name = "sslcPassedOut" placeholder ="Paddded Out Year" type='numbers'></input></label></SSLCYear>  
            <Percentage10><label><p>Mark-Percentage :</p><input onChange={handleChange} value = {values.sslcPercentage} name ="sslcPercentage" placeholder ="Mark In Percentage" type='numbers'></input></label></Percentage10>
          </div>
        </Container1>
          <div>
          <Buttons>
            <Link to={'/inputno1'}><button onClick={()=>dispatch(submit(values))}>Previous</button></Link>
            <Link to={'/inputno3'}><button onClick={()=>dispatch(submit(values))} type='submit'>Next</button></Link>  
          </Buttons>
          </div>
          </form>
        </Container>

    </div>
  )
}

export default InputNo2
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

  font-size:16px;
  margin-top:10px;
  width:300px;
  height:30px;
  border:none;
  border-radius:5px;
  padding:10px;

}
input:hover,input:focus{
  background-color:#59788e;
  color:white;
}

`




const College = styled(Name)`

`
const Course = styled(Name)`

`
const CollegeYear = styled(Name)`

`
const SeniorSecondary = styled(Name)`

`
const SecondaryYear = styled(Name)`

`
const Percentage12 = styled(Name)`

`
const SSLC = styled(Name)`

`
const SSLCYear = styled(Name)`

`
const Percentage10 = styled(Name)`

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
  }`
