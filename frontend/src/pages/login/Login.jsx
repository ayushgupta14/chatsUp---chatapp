import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin()

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-mg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300 '>
          Login To
          <span className='custom-text'> ChatsUP</span>
        </h1>
        
        <form onSubmit={HandleSubmit}>
          <div>
            <label className='label p-4'>
              <span className='label-text text-base'>Username</span>
            </label>
            <input type="text" placeholder='Enter Username' className='input input-bordered w-full h-10' 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className='label p-4'>
              <span className='label-text text-base'>Password</span>
              
            </label>
            <input type="password" placeholder='Enter Password' className='input input-bordered w-full h-10' 
              value={password}
              onChange={(e) =>  setPassword(e.target.value)}
            />
          </div>

          <Link to={"/signup"} className='text-sm hover:underline hover:text-blue-600 inline-block mt-2'> Don't have an account ?</Link>

          <div>
            <button className='btn btn-sm btn-block mt-2 border border-slate-700' disabled={loading}>
            { loading ? <span className='loading loading-spinner'></span> : "Login" }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
