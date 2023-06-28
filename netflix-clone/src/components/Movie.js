import React from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { FaVideoSlash, FaVideo } from "react-icons/fa";

const Movie = ({ movie, handler, trailer }) => {
  const [like, setLike] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const { user } = UserAuth();

  const movieId = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike((like) => !like);
      setSaved(true);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("Please login to save a movie");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex items-center text-center justify-center h-full">
          {movie?.title || movie?.name || movie?.original_name}
        </p>
        <p>
          {trailer ? (
            <FaVideoSlash
              onClick={handler}
              className="absolute top-4 right-4 text-gray-300 md:text-lg"
            />
          ) : (
            <FaVideo
              onClick={handler}
              className="absolute top-4 right-4 text-gray-300 md:text-lg"
            />
          )}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <HiHeart className="absolute top-4 left-4 text-gray-300 md:text-lg" />
          ) : (
            <HiOutlineHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
