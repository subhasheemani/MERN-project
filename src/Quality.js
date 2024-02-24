import React, { useContext, useState } from 'react'
import { dataprovider } from './Context'
import Subbu from './Subbu'
import { twMerge } from 'tailwind-merge'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Quality() {
  const [arsenic,setarsenic]=useState()
  const [lead,setlead]=useState()
  const [mercury,setmercury]=useState();
  const [benzene,setbenzene]=useState();
  const [toluene,settoluene]=useState();
  const [trichorolo,settricholoro]=useState();
  const [nitrate,setnirate]=useState();
  const [percholoro,setpercholoro]=useState();
  const [trietrhylene,settrietrhylene]=useState();
  const [radon,setradon]=useState();
  const {quantity}=useContext(dataprovider)
  const navigate=useNavigate()
  const submitHandler=()=>{
    console.log(quantity,arsenic,lead,mercury,benzene,toluene,trichorolo,nitrate,percholoro,trietrhylene,radon)
    axios.post("http://localhost:5000/send",{quantity,arsenic,lead,mercury,benzene,toluene,trichorolo,nitrate,percholoro,trietrhylene,radon}).then((res)=>{console.log(res)
      Swal.fire(
            'success',
            ''
      )
      navigate("/home")
}).catch((e)=>console.log(e))

  }
  return (
    <div>
      <Subbu></Subbu>
      <div className='bg-gray-800 h-[100vh] font-monserrat '>
        <h3 className='font-montserrat font-extrabold   text-white  text-3xl text-center p-4'><p>Add Sample Details</p></h3>
        <p className='p-1 -translate-x-2 text-center font-montserrat text-white text-xl '>Sample id : {quantity}</p>
        
        <div className='ml-12 grid grid-row'>
          <div className='justify-center text-center align-middle grid gap-y-2'>
        <div className="">
          <label className='text-white text-lg font-montserrat'>Arsenic </label>
    <input className='ml-[130px] rounded-md bg-gray-600 px-2 py-1' onChange={(e)=>setarsenic(e.target.value)}></input>
    <span class="text-white p-2">µg/L</span>
    </div>
    <div className="">
          <label className='text-white text-lg font-montserrat'>Lead </label>
    <input className='ml-[150px] rounded-md bg-gray-600 px-2 py-1' onChange={(e)=>setlead(e.target.value)}></input>
    <span class="text-white p-2">µg/L</span>
    </div>
  
    <div className="">
          <label className='text-white text-lg font-montserrat'>Mercury </label>
    <input className='ml-[125px] rounded-md bg-gray-600 px-2 py-1' onChange={(e)=>setmercury(e.target.value)}></input>
    <span class="text-white p-2">µg/L</span>
    </div>
    <div className="">
          <label className='text-white text-lg font-montserrat'>Benzene </label>
    <input className='ml-[120px] rounded-md bg-gray-600 px-2 py-1' onChange={(e)=>setbenzene(e.target.value)}></input>
    <span class="text-white p-2">µg/L</span>
    </div>
    <div className="">
          <label className='text-white text-lg font-montserrat'>Toluene </label>
    <input className='ml-[125px] rounded-md bg-gray-600 px-2 py-1' onChange={(e)=>settoluene(e.target.value)}></input>
    <span class="text-white p-2">µg/L</span>
    </div>
    
        <div className="">
          <label className='text-white text-lg font-montserrat'>Trichloroethylene </label>
    <input className='ml-10 rounded-md bg-gray-600 px-2 py-1' onChange={(e)=>settricholoro(e.target.value)}></input>
    <span class="text-white p-2">µg/L</span>
    </div>
    <div className="">
          <label className='text-white text-lg font-montserrat'>Nitrates </label>
    <input className='ml-[130px] rounded-md bg-gray-600 px-2 py-1' onChange={(e)=>setnirate(e.target.value)}></input>
    <span class="text-white p-2">µg/L</span>
    </div>
  
    <div className="">
          <label className='text-white text-lg font-montserrat'>Percholoroethylene </label>
    <input className='ml-5 rounded-md bg-gray-600 px-2 py-1' onChange={(e)=>setpercholoro(e.target.value)}></input>
    <span class="text-white p-2">µg/L</span>
    </div>
    <div className="">
          <label className='text-white text-lg font-montserrat'>Trichloroethene </label>
    <input className='ml-12 rounded-md bg-gray-600 px-2 py-1' onChange={(e)=>settrietrhylene(e.target.value)}></input>
    <span class="text-white p-2">µg/L</span>
    </div>
    <div className="">
          <label className='text-white text-lg font-montserrat'>Radon </label>
    <input className='ml-[140px] rounded-md bg-gray-600 px-2 py-1' onChange={(e)=>setradon(e.target.value)}></input>
    <span class="text-white p-2">pCi/L</span>
    </div>
    </div>
        </div>
        <div className='flex text-center justify-center p-4'>
        <button className="btn btn-primary" onClick={()=>submitHandler()}>Submit</button>
        </div>
      </div>
      </div>
  )
}
