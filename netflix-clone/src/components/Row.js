import React from 'react'
import Movie from './Movie';
import { MdChevronRight, MdChevronLeft } from "react-icons/md"
import Youtube from "react-youtube"
import movieTrailer from 'movie-trailer'
import { RxVideo } from "react-icons/rx"
import YouTube from 'react-youtube';
import { UserAuth } from '../context/AuthContext';

export default function Row({title, fetchURL, rowId}) {

  const [movies, setMovies] = React.useState([])
  const [trailerURL, setTrailerUrl] = React.useState('')
  const { user } = UserAuth();

  React.useEffect(() => {
    const fetchData = async() => {
        const res = await fetch(fetchURL)
        const data = await res.json();
        //console.log(data)
        setMovies(data.results)
    };

    fetchData();

  }, [])

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;

  };

  const slideRight = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
    console.log(slider.scrollRight, slider.scrollLeft)
  };

  const playTrailer = (movie) => {
    if(user?.email){
      if(trailerURL) {
        setTrailerUrl('');
      }
      else {
          movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
              .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
          }).catch((error) => console.log(error))
      }
    }
    else{
      alert("Kindly login to stream videos")
    }
}

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft} 
          className='left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40} 
          />
        <div 
          id={'slider' + rowId} 
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movies.map((movie, id) => (
              <Movie movie={movie} key={id} handler={() => playTrailer(movie)} trailer={trailerURL ? true : false}/>
            ))}
            
        </div>
        <MdChevronRight 
          onClick={slideRight}
          className='right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40} />
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} className=''/>}
    </div>
  )
}

