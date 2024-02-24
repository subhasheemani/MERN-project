import React, { useContext } from 'react';
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Subbu from './Subbu'
import Quality from './Quality';
import { DataInfo, dataprovider } from './Context';
import Login from './Login';
import Result from './Result';

function App(){
  const {user}=useContext(dataprovider)
  console.log(user)
  
  return(
     <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      {user &&
      <>
      <Route   path="/home" element={<Home></Home>}></Route>
      <Route path="/qualitytest" element={<Quality></Quality>}></Route>
      <Route path="/result" element={<Result></Result>}></Route>
      </>
      }
     </Routes>
  )
}

export default App;
