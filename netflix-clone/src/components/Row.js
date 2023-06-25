import React from 'react'
import Movie from './Movie';
import { MdChevronRight, MdChevronLeft } from "react-icons/md"

export default function Row({title, fetchURL, rowId}) {

  const [movies, setMovies] = React.useState([])

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
    slider.scrollRight = slider.scrollRight + 500;
    console.log("hellooo")
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
              <Movie movie={movie} key={id}/>
            ))}
        </div>
        <MdChevronRight 
          onClick={slideRight}
          className='right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40} />
      </div>
    </div>
  )

  // return (
  //   <>
  //     <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
  //     <div className='relative flex items-center group'>
  //       <MdChevronLeft
  //         onClick={slideLeft}
  //         className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
  //         size={40}
  //       />
  //       <div
  //         id={'slider' + id}
  //         className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
  //       >
  //         {movies.map((movie, id) => (
  //           <Movie key={id} movie={movie} />
  //         ))}
  //       </div>
  //       <MdChevronRight
  //         onClick={slideRight}
  //         className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
  //         size={40}
  //       />
  //     </div>
  //   </>
  // )
}

