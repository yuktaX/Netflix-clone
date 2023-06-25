import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <nav>
        <Link to='/home'>
          <div>
              <img
              src="https://rb.gy/ulxxee"
              width={120}
              height={120}
              className="cursor-pointer object-contains"
              alt='Netflix'
              />
          </div>
        </Link> 
      </nav>
      <div>
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/9c547c8a-e707-4bdb-bdbc-843f134dd2a6/IN-en-20230619-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                alt = 'bgimage'
                className='sm:block absolute w-full h-[400px] object-cover'
          />
            <div className='bg-black/70 top-0 left-0 fixed w-full h-[550px]'></div>
            <div className='absolute top-[20%] p-4 md:p-8'>
              <h1 className='text-3xl text-white md:text-5xl font-bold'>My Shows</h1>
            </div>
            <SavedShows />
      </div>
     
    </>
  )
}

export default Account