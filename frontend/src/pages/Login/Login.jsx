import React from 'react';


const Login = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-4xl font-semibold text-center text-gray-300 '>Login
            <span className='text-blue-500 text-lg ml-5'>U Chat App</span>
          </h1>
          <form>
            <div>
              <label className='label p-2'>
                <span className='text-base text-white label-text '>Enter Username</span>
              </label>
              <input type='text' placeholder='Enter Username' className='w-full bg-gray-900 text-white input input-bordered h-10'/>
              <label className='label p-2'>
                <span className='text-base text-white label-text '>Enter Password</span>
              </label>
              <input type='password' placeholder='Enter Password' className='w-full bg-gray-900  text-white input input-bordered h-10'/>
            </div>
            {/* This Link component doesn't have any destination specified */}
       <a href='#' className='text-sm text-blue-400 hover:underline'> Dont't Have An Account</a>
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
