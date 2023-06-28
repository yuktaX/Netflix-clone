import React from "react";
import requests from "../utils/requests";
import { HiPlay, HiInformationCircle } from "react-icons/hi";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { UserAuth } from "../context/AuthContext";

export default function Hero() {
  const [movies, setMovies] = React.useState([]);
  const [trailerURL, setTrailerUrl] = React.useState("");
  const { user } = UserAuth();

  const movie = movies[Math.ceil(Math.random() * movies.length)];
  console.log(movie);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(requests.fetchTrending);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    };

    fetchData();
  }, []);

  const truncateString = (string, num) => {
    if (string?.length > num) {
      return string.slice(0, num) + "....";
    } else return string;
  };

  const playTrailer = (movie) => {
    if (user?.email) {
      if (trailerURL) {
        setTrailerUrl("");
      } else {
        movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error) => console.log(error));
      }
    } else {
      alert("Kindly login to stream videos");
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="w-full h-full text-white">
      <div className="w-full h-[600px]">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8 ">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold flex items-center">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <p className="text-gray-400 text-sm my-2">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 400)}
          </p>
          <div className="flex space-x-3 my-4">
            <button
              className="heroButton bg-white text-black"
              onClick={() => playTrailer(movie)}
            >
              <HiPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
              {trailerURL ? "Close" : "Play"}
            </button>
            <button className="heroButton bg-[gray]/70">
              <HiInformationCircle className="h-4 w-4 md:h-7 md:w-7" />
              More Info
            </button>
          </div>
        </div>
      </div>
      {trailerURL && (
        <YouTube videoId={trailerURL} opts={opts} className="z-30" />
      )}
    </div>
  );
}
