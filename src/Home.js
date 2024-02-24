import React, { useContext } from 'react'
import qislogo from './images/qislogo.jpg'
import Subbu from './Subbu'
import './Home.css'
import pollution from './images/pollution.jpg'
import { useState } from 'react'
import { dataprovider } from './Context'
import { useNavigate } from 'react-router-dom'
export default function Home() {
const {handler} =useContext(dataprovider)
const navigate=useNavigate();
const datahandler=()=>{
  if(type==="Analyst"){
    handler(data)
  navigate("/qualitytest")
  }
  else if(type==="Farmer"){
    handler(data)
    navigate("/result")
  }
}
const [data,setdata]=useState();
const [type,setType]=useState();
  return (
    <div>
     
    <div style={{background:'cover',width:'100%',height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
      <div style={{backgroundImage:`url(${pollution})`,backgroundRepeat:"no-repeat",backgroundSize:'cover',backgroundPosition:'center',height:"100vh",width:"100%",position:"fixed"}} className='bg-blur-xl'>
        <div className='h-full w-full  backdrop-blur-sm -z-10'>
        <Subbu ></Subbu>
        <div className='flex  justify-center items-center text-center content-center   '>
        <div   style={{backgroundColor:"mlikywhite",width:"350px",height:"350px",top:"350px",left:"39%",opacity:'',position:"fixed",borderRadius:"40px",color:"#fff"}} className=' items-center justify-center content-center'>
            <center style={{fontFamily:"serif",fontWeight:"bold",fontSize:"25px"}}>Water sample</center>
            <div className="grid gap-y-3">
            <div className="relative">
      <input
   onChange={(e)=>
    setdata(e.target.value)}
        type="text"
        id="email"
        className="
        block
        rounded-md
        px-6
        pt-6
        pb-1
        w-full
        text-md
      text-white
      bg-neutral-700
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        invalid:border-b-1
        "
        placeholder=" " 
      />
      <label 
        htmlFor="email"
        className="
        absolute 
        text-md
      text-zinc-400
        duration-150 
        transform 
        -translate-y-3 
        scale-75 
        top-4 
        z-10 
        origin-[0] 
        left-6
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-3
      ">Sample id</label>
    </div>
             <div>
              <select class="text-white font-montserrat p-2 w-full rounded-md bg-neutral-700" onChange={(e)=>{
                setType(e.target.value)
                console.log(type)
              }}>
              <option >--select---</option>
              <option>Farmer</option>
              <option>Analyst</option>
              </select>
             </div>
           
            
            <center>
              <div style={{padding:"20px"}}>
            <button className='btn btn-primary hover:z-10 hover:scale-110 hover:shadow-lg hover:ring-1 w-full hover:ring-slate-700/10' style={{top:"100vh"}} onClick={()=>datahandler(data)}>Submit</button>
            </div>
            </center>
            </div>
        </div>
        </div>
      </div>
     </div>
     </div>
     </div>
    )
}
