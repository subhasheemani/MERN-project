import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const dataprovider = createContext();
export function DataInfo(props) {
  const navigate=useNavigate();
const [quantity,setquantity]=useState();
const [user,setuser]=useState(null)
function handler(data){
setquantity(data);
}
console.log(quantity)
  const totaldata={
    handler,
    quantity,
    user,
    setuser
  }
  return (
    <dataprovider.Provider value={totaldata}>
      {props.children}
    </dataprovider.Provider>
  )
}