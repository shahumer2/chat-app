import React from 'react'

const SignUp = () => {
  return (
    <>
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-4xl font-semibold text-center text-gray-300 '>Sign Up
            <span className='text-blue-500 text-lg ml-5'>U Chat App</span>
          </h1>
          <form>
            <div>
              <label className='label p-2'>
                <span className='text-base text-white label-text '>Full Name</span>
              </label>
              <input type='text' placeholder='Shah Umer' className='w-full bg-gray-900 text-white input input-bordered h-10'/>
              <label className='label p-2'>
                <span className='text-base text-white label-text '>Username</span>
              </label>
              <input type='text' placeholder='shahumer' className='w-full bg-gray-900 text-white input input-bordered h-10'/>
              <label className='label p-2'>
                <span className='text-base text-white label-text '>Password</span>
              </label>
              <input type='password' placeholder='Enter Password' className='w-full bg-gray-900  text-white input input-bordered h-10'/>
              <label className='label p-2'>
                <span className='text-base text-white label-text '>Confirm Password</span>
              </label>
              <input type='password' placeholder='Confirm Password' className='w-full bg-gray-900  text-white input input-bordered h-10'/>
            </div>
            {/* This Link component doesn't have any destination specified */}
       <a href='#' className='text-sm text-blue-400 hover:underline'> Dont't Have An Account</a>
       <div className='flex flex-row '>
           <div className="form-control mr-3">
          <label className="label cursor-pointer">
          <span className="label-text text-white mr-2">Male</span> 
           <input type="checkbox"  className="checkbox  border-slate-400" />
          </label>
          </div>
             <div className="form-control">
              <label className="label cursor-pointer">
               <span className="label-text text-white mr-2">Female</span> 
             <input type="checkbox"  className="checkbox border-slate-400" />
          </label>
           </div>
           
       </div>
            <div>
              {/* Other elements can go here */}
              <button className="btn btn-neutral w-full m-2">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
