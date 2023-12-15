import React, { useContext, useState, useEffect } from "react";
import { Context } from "../context/contextAPI";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AiFillStar } from "react-icons/ai";
import { MdDelete, MdPlaylistAdd } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { app, auth, db } from "../context/firebaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteField,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const Movie = ({ movie }) => {
  const { loading, setloading } = useContext(Context);
  const [watched, setWatched] = useState(false);
  const navigate = useNavigate();
  const notify = (msg) => {
    toast(msg);
  };
  const addMovie = () => {
    const movieRef = doc(db, "movie", auth?.currentUser?.uid);
    const data = { [movie?.id]: movie };
    setDoc(movieRef, data, { merge: true });
  };
  const deleteMovie = () => {
    const movieRef = doc(db, "movie", auth?.currentUser?.uid);
    updateDoc(movieRef, {
      [movie?.id]: deleteField(),
    });
  };
  const getData = () => {
    const movieRef = doc(db, "movie", auth?.currentUser?.uid);
    getDoc(movieRef)
      .then((res) => {
        res?.data() != null &&
          Object.keys(res?.data()).map((movieId) => {
            if (movieId == movie?.id) {
              setWatched(true);
            }
          });
      })
      .catch((err) => {
        console.log(err?.message);
      });
  };
  useEffect(() => {
    if (auth != null && auth.currentUser != null) {
      getData();
    }
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, [auth, auth.currentUser]);

  return (
    <>
      {loading ? (
        <div className="inline-block transition-transform duration-200 relative h-[400px] sm:h-[500px] rounded-[10px] overflow-hidden z-0 border-solid border-white/70 cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={"100%"} duration={2}></Skeleton>
          </SkeletonTheme>
        </div>
      ) : (
        <div className="inline-block transition-transform duration-200 relative rounded-[12px] overflow-hidden z-0 border-2 border-solid border-white/70 cards">
          <Link to={`/movie/${movie?.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            />
          </Link>
          <div className="movie_info opacity-100 md:opacity-0">
            <div className="font-bold text-base mb-2">
              <Link to={`/movie/${movie?.id}`}>{movie?.original_title}</Link>
              <span
                className="float-right flex items-center justify-center text-xl transition-transform hover:scale-150 cursor-pointer"
                onClick={() => {
                  if (auth?.currentUser == null) {
                    navigate("/signin");
                  } else {
                    setWatched(!watched);
                    !watched ? addMovie() : deleteMovie();
                  }
                }}
              >
                {watched ? (
                  <MdDelete
                    onClick={() => {
                      auth?.currentUser != null &&
                        notify("Deleted from watchlist");
                    }}
                  ></MdDelete>
                ) : (
                  <MdPlaylistAdd
                    onClick={() => {
                      auth?.currentUser != null && notify("Added to watchlist");
                    }}
                  ></MdPlaylistAdd>
                )}
              </span>
            </div>
            <div className="text-xs mb-1">
              {movie?.release_date}
              <span className="float-right flex items-center">
                {movie?.vote_average}
                <AiFillStar></AiFillStar>
              </span>
            </div>
            <div className="italic text-xs mb-1 line-clamp-2 sm:line-clamp-3 lg:line-clamp-4">
              {movie?.overview + "..."}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
