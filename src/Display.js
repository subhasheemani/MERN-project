import React, { useCallback, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import './styles.css';

const DialogDemo = () => {
const [toogle,settoogle]=useState("sign in")
const change=useCallback(()=>{
settoogle((currrentval)=>currrentval==="sign in"?"sign up":"sign in")
},[])
    return (
        <div>
    <section class="bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <p  class="flex items-center mb-6 text-2xl font-semibol text-white">
           
        </p>
        <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-center text-white">
        {toogle}
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required=""></input>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                    </div>
                   {toogle==="sign up" &&
                   <div>
                   <label for="password" class="block mb-2 text-sm font-medium text-white">confirm password</label>
                   <input type="password" name="password" id="password" placeholder="confirm password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
               </div>}
                  <button className='text-white bg-gray-700 w-full rounded-md font-semibold aligin-center justify-center p-2 text-center bg-neutral-700/10 hover:bg-neutral-700 '>Submit</button>
                  <p className='flex w-full text-white font-semibold '>
                    {toogle==="sign in"?"Don't have a account?":"Already have an account?"}
                    <p onClick={change}>{toogle==="sign in"?"sign up":"sign in"}</p></p>
                </form>
            </div>
        </div>
    </div>
  </section>
  </div>
);
    }

export default DialogDemo;