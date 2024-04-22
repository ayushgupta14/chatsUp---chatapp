import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-mg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300 '>
          Sign Up
          <span className='text-blue-400'> ChatApp</span>
        </h1>

        <form >
          <div>
          <label className='label p-4'>
              <span className='label-text text-base'>Fullname</span>
            </label>
            <input type="text" placeholder='eg Ben Clark' className='input input-bordered w-full h-10' />
          </div>

          <div>
          <label className='label p-4'>
              <span className='label-text text-base'>Username</span>
            </label>
            <input type="text" placeholder='eg benclark' className='input input-bordered w-full h-10' />
          </div>

          <div>
            <label className='label p-4'>
              <span className='label-text text-base'>Password</span>
            </label>
            <input type="password" placeholder='Enter Password' className='input input-bordered w-full h-10' />
          </div>

          <div>
            <label className='label p-4'>
              <span className='label-text text-base'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm Password' className='input input-bordered w-full h-10' />
          </div>

          <GenderCheckbox />


          <a href="#" className='text-sm hover:underline hover:text-blue-600 inline-block mt-2'> Already have an account ?</a>

          <div>
            <button className='btn btn-sm btn-block mt-2 border-slate-700'>Sign Up</button>
          </div>
       
        </form>
      </div>
    </div>
  )
}

export default SignUp
