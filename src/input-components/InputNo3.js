import React,{useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {formValue} from '../features/form/formSlice'
import {useDispatch} from 'react-redux'
import {submit} from '../features/form/formSlice.js'
import Header from '../Header'


const InputNo3 = () => {
  const formValues = useSelector(formValue);
  const [values,setValues] = useState(formValues);
  const dispatch = useDispatch();

 const handleChange = (e) =>{
  const {name , value } = e.target;

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
        <form onSubmit={handleSubmit} >
        <Container1>
          <div>
            <Languages><label><p>Language Know :</p><input onChange={handleChange} value = {values.languageKnow} name = "languageKnow" placeholder ='Language You Know' type='text'></input></label></Languages>
            <PerSkills><label><p>Personal Skills :</p><input onChange={handleChange} value = {values.personalSkills} name ="personalSkills" placeholder ='Personal Skills You Know ' type='text'></input></label></PerSkills>
            <TechSkills><label><p>Technicalsonal Skills :</p><input onChange={handleChange} value = {values.technicalSkills} name ="technicalSkills" placeholder ='Technical Skills You Know ' type='text'></input></label></TechSkills>
          </div>
          <div>
            <ProjectLinks><label><p>Project Links :</p><input onChange={handleChange} value = {values.projectLinks} name ="projectLinks" placeholder='Project Links' type='url'></input></label></ProjectLinks>
            <Address><label><p>Address :</p><input value = {values.address} onChange={handleChange} name = "address" placeholder='Enter Your Address' type='text'></input></label></Address>
            <Pincode><label><p>Pincode :</p><input value = {values.pincode} onChange={handleChange} name ="pincode" placeholder = "Enter Your Pincode" type='numbers'></input></label></Pincode>
          </div>          
          </Container1>
          <div>
          <Buttons>
            <Link to={'/inputno2'}><button onClick={()=>dispatch(submit(values))}>Previous</button></Link>
            <Link to={'/print'}><button onClick={()=>dispatch(submit(values))} type='submit'>Submit</button></Link>
          </Buttons>
          </div>
          </form>
        </Container>
    </div>
  )
}

export default InputNo3
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
  height:30px;
  font-size:16px;
  border:none;
  border-radius:5px;
  padding:10px;

}
input:hover,input:focus,input:active{
  background-color:#59788e;
  border:none;
  color:white;

`

const Address = styled(Name)`

`
const Pincode = styled(Name)`

`
const TechSkills = styled(Name)`

`

const PerSkills = styled(Name)`

`
const Languages = styled(Name)`

`
const ProjectLinks = styled(Name)`

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
