import React from 'react'
import requests from '../utils/requests';
import { HiPlay,HiOutlinePlay,HiInformationCircle } from "react-icons/hi";

export default function Hero() {

    const [movies, setMovies] = React.useState([])

    const movie = movies[(Math.ceil(Math.random() * movies.length))]
    console.log(movie)

    //https://api.themoviedb.org/3/trending/all/week?api_key=2dad3caf847024da296ef3b30b438a1f&language=en-US
    React.useEffect(() => {
        const fetchData = async() => {
            //const res = await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=2dad3caf847024da296ef3b30b438a1f&language=en-US")
            const res = await fetch(requests.fetchTrending)
            const data = await res.json();
            console.log(data)
            setMovies(data.results)
        };

        fetchData();

    }, [])

    const truncateString = (string, num) => {
        if(string?.length > num){
            return string.slice(0, num) + '....';
        }
        else
            return string;
    }

    return (
        <div className='w-full h-[600px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
                <img 
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                    alt={movie?.title} 
                    className='h-full w-full object-cover'
                    layout="fill"
                    objectFit='cover'
                />
                <div className='absolute w-full top-[20%] p-4 md:p-8 '>
                    <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold flex items-center'>{movie?.title}</h1>
                    <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                        {truncateString(movie?.overview, 400)}</p>
                        <div className='flex space-x-3 my-4'>
                        {/* <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
                            Play</button>
                        <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
                            Watch Later</button> */}

                            <button className='heroButton bg-white text-black'>< HiPlay className='h-4 w-4 text-black md:h-7 md:w-7'/>Play</button>
                            <button className='heroButton bg-[gray]/70'>< HiInformationCircle lassName='h-4 w-4 md:h-7 md:w-7' />More Info</button>
                        </div>
                </div>
            </div>
        </div>
    )


}

