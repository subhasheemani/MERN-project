import 'bootstrap/dist/css/bootstrap.min.css';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth } from './console';
function Subbu() {
  const navigate=useNavigate()
  const logout=async ()=>{
    signOut(auth).then(()=>{
     
      navigate("/")
    })


  }
  return (
    <div className='w-full flex ring-0 shadow-lg ring-slate-900/10 items-center content-center justify-center bg-white bg-opacity-50 backdrop-blur-md p-4 '>
      <h1 className='font-montserrat  items-center justify-center text-center absolute left-3 font-extrabold text-3xl text-slate-800'>Water Purification Suggestion System</h1>
      <div className='flex font-montserrat text-black'>
       <ul className='flex gap-x-4'>
       <Link to="/home" className='no-underline'><li className='font-montserrat text-xl font-thin  text-neutral-700 text text-center justify-center content-center'>Home</li></Link> 
       
       </ul>
       <buuton onClick={()=>logout()}><p className='float-right right-3 fint-semibold text-2xl absolute'>Logout</p></buuton>
      </div>
    </div>
  );
}

export default Subbu;