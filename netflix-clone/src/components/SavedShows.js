import React from 'react';
import { MdChevronRight, MdChevronLeft } from "react-icons/md"
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, setDoc, onSnapshot} from 'firebase/firestore'


const SavedShows = () => {

    const {user} = UserAuth()
    const [movies, setMovies] = React.useState([])

    React.useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows);
        })
    })

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollRight = slider.scrollRight + 500;
      };
    return (
        <div>
            <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
            <div className='absolute flex items-center group bg-red-100 w-screen'>
                <MdChevronLeft
                onClick={slideLeft} 
                className='left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                size={40} 
                />
                <div id={'slider'} className='h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((movie, id) => (
                    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2'>
                        <img 
                            className='w-full h-auto block' 
                            src={`https://image.tmdb.org/t/p/w500/${movie?.img}`} 
                            alt={movie?.title}
                        
                        />
                            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                <p className='white-space-normal text-xs md:text-sm font-bold flex items-center text-center justify-center h-full'>{movie?.title}</p>    
                            </div>
                    </div>
                    ))}
                </div>
                <MdChevronRight 
                onClick={slideRight}
                className='right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                size={40} />
            </div>
        </div>
    )
}

export default SavedShows