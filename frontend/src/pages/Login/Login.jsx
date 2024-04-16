import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import toast from 'react-hot-toast';


const Login = () => {
const{setAuthUser}=  useAuthContext();
const [inputs, setinputs] = useState({
  username:'',
  password:''
})

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
     
     const res = await fetch("/api/auth/login",{
      method:"post",
      headers:{
        'Content-type': 'application/json',
      },
      body:JSON.stringify(inputs)
     })
     const data = await res.json();
     if(data.error){
     throw new Error(data.error)
     }
      localStorage.setItem("chat-user",JSON.stringify(data))
      setAuthUser(data)
    } catch (error) {
      console.log(error);
      toast("invalid username or password",
          {
            icon: '👏',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        );
      
    }

  }
  return (
    <>
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-4xl font-semibold text-center text-gray-300 '>Login
            <span className='text-blue-500 text-lg ml-5'>U Chat App</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className='label p-2'>
                <span className='text-base text-white label-text '>Enter Username</span>
              </label>
              <input type='text' placeholder='Enter Username' className='w-full bg-gray-900 text-white input input-bordered h-10'
              value={inputs.username} onChange={(e)=>setinputs({...inputs,username:e.target.value})}
              />
              <label className='label p-2'>
                <span className='text-base text-white label-text '>Enter Password</span>
              </label>
              <input type='password' placeholder='Enter Password' className='w-full bg-gray-900  text-white input input-bordered h-10'
              value={inputs.password} onChange={(e)=>setinputs({...inputs,password:e.target.value})}
              />
            </div>
            {/* This Link component doesn't have any destination specified */}
              <Link to='/signup' className='text-sm text-blue-400 hover:underline'> Dont't Have An Account</Link>
            <div>
              {/* Other elements can go here */}
              <button className="btn btn-neutral w-full m-2">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
