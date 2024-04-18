import React, { useState } from 'react'
import toast from 'react-hot-toast'

import { Link, useNavigate,  } from 'react-router-dom'

import { useAuthContext } from '../../context/AuthContext'

const SignUp = () => {

 const { authUser, setAuthUser} =useAuthContext();
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  })

  const handleCheckbox = (gender) => {
    setInputs({ ...inputs, gender });
  }
  const handleSubmit = async (e) => {

    e.preventDefault();
    try {

      const { fullName, username, password, confirmPassword, gender } = inputs
      if (!fullName || !username || !password || !confirmPassword || !gender) {
        return toast('Please Fill All The Fields!',
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
      if (password.length < 4) {
        return toast('Password Too Short!',
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
      if(password!==confirmPassword){
        return toast('Password Dont Match!',
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

      const res = await fetch("/api/auth/signup",{
        method:"POST",
        headers:{
          'Content-type': 'application/json',
        },
        body:JSON.stringify(inputs)

      })
      const data = await res.json();
      console.log(data);
      toast('Sign Up Successfully!',
  {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);


localStorage.setItem("chat-user",JSON.stringify(data))

setAuthUser(data)

    } catch (error) {
      toast('Something went Wrong While Signup!',
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
          <h1 className='text-4xl font-semibold text-center text-gray-300 '>Sign Up
            <span className='text-blue-500 text-lg ml-5'>U Chat App</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className='label p-2'>
                <span className='text-base text-white label-text '>Full Name</span>
              </label>
              <input type='text' placeholder='Shah Umer' className='w-full bg-gray-900 text-white input input-bordered h-10'
                value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
              />
              <label className='label p-2'>
                <span className='text-base text-white label-text '>Username</span>
              </label>
              <input type='text' placeholder='shahumer' className='w-full bg-gray-900 text-white input input-bordered h-10'
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              />
              <label className='label p-2'>
                <span className='text-base text-white label-text '>Password</span>
              </label>
              <input type='password' placeholder='Enter Password' className='w-full bg-gray-900  text-white input input-bordered h-10'
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              />
              <label className='label p-2'>
                <span className='text-base text-white label-text '>Confirm Password</span>
              </label>
              <input type='password' placeholder='Confirm Password' className='w-full bg-gray-900  text-white input input-bordered h-10'
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              />
            </div>

            <div className='flex flex-row'>
              <div className="form-control mr-3">
                <label className="label cursor-pointer">
                  <span className="label-text text-white mr-2">Male</span>
                  <input
                    type="checkbox"
                    className="checkbox border-slate-400"
                    checked={inputs.gender === 'male'}
                    onChange={() => handleCheckbox('male')}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text text-white mr-2">Female</span>
                  <input
                    type="checkbox"
                    className="checkbox border-slate-400"
                    checked={inputs.gender === 'female'}
                    onChange={() => handleCheckbox('female')}
                  />
                </label>
              </div>
            </div>

            <div>
              <Link to='/login' className='text-sm text-blue-400 hover:underline'> Already Have An Account</Link>
            </div>

            <div>
              <button type='submit' className="btn btn-neutral w-full m-2">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
