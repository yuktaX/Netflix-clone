import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Signup = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const {user, signUp} = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (event) => {

        event.preventDefault()
        setError('')
        try {
            await signUp(email, password)
            navigate('/login')
        }
        catch(error){
            console.log(error)
            setError(error.message)
        }
    }

  return (
    <>
        <nav>
            <Link to='/'>
                <div className='flex items-center justify-betweenspace-x-2 md:space-x-10'>
                    <img
                    src="https://rb.gy/ulxxee"
                    width={120}
                    height={120}
                    className="cursor-pointer object-contain"
                    alt='Netflix'
                    />
                </div>
            </Link> 
        </nav>

        <div className='width-full h-screen'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/9c547c8a-e707-4bdb-bdbc-843f134dd2a6/IN-en-20230619-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                alt = 'bgimage'
                className='hidden sm:block absolute w-full h-full object-cover'
            />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] bg-black/60 mx-auto text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                        {error != '' ? <p>{error}</p> : null}
                        <form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
                            <input className='p-3 my-2 bg-gray-600/70 rounded' 
                                type="email" 
                                placeholder="Email" 
                                autoComplete='email'
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <input className='p-3 my-2 bg-gray-600/70 rounded' 
                                type="password" 
                                placeholder="Password" 
                                autoComplete='password'
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <button className='bg-red-600 rounded my-6 py-3'>Sign Up</button>
                            <div className='flex justify-between items-center text-sm text-gray-500'>
                                <p><input type="checkbox" className='mr-1'/>Remember Me</p>
                                <p>Need help?</p>
                            </div>
                            <p className='py-4 flex justify-center'><span className='text-gray-500'>Already have an account?{'  '}</span>
                            {'     '}
                            <Link to='/login'>&nbsp;&nbsp;<u>Sign In</u></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup