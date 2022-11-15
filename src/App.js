import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Header from './Header';
import InputNo1 from './input-components/InputNo1';
import InputNo2 from './input-components/InputNo2';
import InputNo3 from './input-components/InputNo3';
import Welcome from './input-components/Welcome';
import Resume from './Resume';
import Print from './Print'
const App = () => {

  
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element = {<Welcome/>}  />
          <Route path='/inputno1' element={<InputNo1/>} />
          <Route path='/inputno2' element={<InputNo2/>} />
          <Route path='/inputno3' element={<InputNo3/>} />
          <Route path='/print' element={<Print/>}/>
        </Routes>
      </Router>

    </div>

  )

};

export default App
