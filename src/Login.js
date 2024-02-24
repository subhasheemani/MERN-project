import React, { useState,useCallback, useContext} from 'react'
import { auth } from './console'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { dataprovider } from './Context'
import Swal from 'sweetalert2'
import background from './images/background.jpg'
import { useEffect } from 'react'
 let Login=()=> {
  const [toogle,settoogle]=useState("sign in")
const change=useCallback(()=>{
settoogle((currrentval)=>currrentval==="sign in"?"sign up":"sign in")
},[])
  let navigate=useNavigate();
    const [email,setemail]=useState()
    const [pass,setpass]=useState()
    const {setuser}=useContext(dataprovider)
    const handleSubmit=async(e)=>{
      e.preventDefault();
      if(toogle==="sign up"){
        document.getElementById("message").innerHTML=''
        createUserWithEmailAndPassword(auth,email,pass).then((res)=>{
         Swal.fire(
          'Good job!',
          'successfully sign up',
          'Continue'
         )
        }).catch((e)=>{
          document.getElementById("message").innerText=e.message
        })
      }
      else{
        document.getElementById("message").innerHTML=''
        signInWithEmailAndPassword(auth,email,pass).then((res)=>{
          navigate("/home")
          setuser(email)
          Swal.fire(
            'Login Sucessfull !',
            'successfully logged in',
            'Continue'
           )
        }).catch((e)=>{
          document.getElementById("message").innerText=e.message
        })
      }
    }
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false
        },
        "google_translate_element"
      );
    };
    useEffect(() => {
      var addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);
   
     
  return (
    <div>
    
    <section class="bg-gray-900" style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <p  class="flex items-center mb-6 text-2xl font-semibol text-white">
           
        </p>
        <div id="google_translate_element" className='absolute top-5'></div>
        <div class="w-full rounded-lg backdrop-blur-md bg-gray-900 shadow border md:mt-0 sm:max-w-md xl:p-0 bg-neutral-400/10 border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold font-montserrat leading-tight tracking-tight md:text-2xl text-center text-white">
        {toogle}
                </h1>
                <div>
                  <p id="message" className='text-white font-semibold font-serif text-md text-danger'></p>
                </div>
                <form class="space-y-4 md:space-y-6 gap-y-4" action="#">
                  <div className='grid grid-flow-row gap-y-8'>
                  <div className="relative">
      <input
   onChange={(e)=>
    setemail(e.target.value)}
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
      ">Email</label>
    </div>
                   
    <div className="relative">
      <input
   onChange={(e)=>
    setpass(e.target.value)}
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
      ">Password</label>
    </div>
                   {toogle==="sign up" &&
                   <div className="relative">
                   <input
                
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
                   ">Confirm Password</label>
                 </div>}
                  <button className='text-white w-full rounded-xl transition-all duration-300 hover:rounded-md  font-semibold aligin-center justify-center p-2 text-center bg-red-500 hover:bg-red-600 ' onClick={(e)=>{handleSubmit(e)}}>Submit</button>
                  <p className='flex w-full text-white font-semibold font-montserrat'>
                    {toogle==="sign in"?"Don't have a account?":"Already have an account?"}
                    <p onClick={change}>{toogle==="sign in"?"sign up":"sign in"}</p></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </section>
  </div>
  )
}
export default Login