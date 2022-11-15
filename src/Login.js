import React from 'react'
import {useSelector} from 'react-redux'
import { formValue} from './features/form/formSlice'

const Login = () => {
  const value = useSelector(countValue);
  console.log(value)
  return (
    <div>
  

    </div>
  )
}

export default Login