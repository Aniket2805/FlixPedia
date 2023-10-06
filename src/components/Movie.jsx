import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../context/contextAPI';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { AiFillStar, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../index.css';
import { app, db } from '../context/firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Movie = ({ movie }) => {
    const { loading, setloading } = useContext(Context);
    const [watched, setWatched] = useState(false);
    const collectionRef = collection(db, 'movies');
    const notify = (msg) => {
        toast(msg);
    };
    const addMovie = () => {
        addDoc(collectionRef, movie)
            .then(() => {
                console.log("Movie Added with id=" + movie?.id);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
    const deleteMovie = () => {
        getDocs(collectionRef)
            .then((res) => {
                res.docs.map((item) => {
                    if (item.data().id == movie.id) {
                        deleteDoc(doc(db, 'movies', item.id))
                            .then(() => {
                                console.log("Movie Deleted with id=" + movie?.id);
                            })
                            .catch((err) => {
                                console.log(err.message);
                            })
                    }
                })
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
    const getData = () => {
        getDocs(collectionRef)
            .then((res) => {
                res.docs.map((item) => {
                    if (item.data().id == movie.id) {
                        setWatched(true);
                    }
                })
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
    useEffect(() => {
        getData();
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 1500);
    }, [])

    return (
        <>
            {
                loading
                    ?
                    <div className='inline-block transition-transform duration-200 relative h-[400px] sm:h-[500px] rounded-[10px] overflow-hidden z-0 border-solid border-white/70 cards'>
                        <SkeletonTheme color="#202020" highlightColor='#444'>
                            <Skeleton height={"100%"} duration={2}></Skeleton>
                        </SkeletonTheme>
                    </div> :
                    <div className='inline-block transition-transform duration-200 relative rounded-[12px] overflow-hidden z-0 border-2 border-solid border-white/70 cards'>
                        <Link to={`/movie/${movie?.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} />
                        </Link>
                        <div className='movie_info opacity-100 md:opacity-0'>
                            <div className='font-bold text-base mb-2'>
                                <Link to={`/movie/${movie?.id}`}>{movie?.original_title}</Link>
                                <span className='float-right flex items-center justify-center text-xl transition-transform hover:scale-150 cursor-pointer' onClick={() => {
                                    setWatched(!watched);
                                    !watched ? addMovie() : deleteMovie();
                                }}>
                                    {watched ?
                                        <AiFillEyeInvisible onClick={()=>{notify("Deleted from watchlist")}}></AiFillEyeInvisible>
                                        :
                                        <AiFillEye onClick={()=>{notify("Added to watchlist")}}></AiFillEye>}
                                </span>
                            </div>
                            <div className='text-xs mb-1'>
                                {movie?.release_date}
                                <span className='float-right flex items-center'>{movie?.vote_average}<AiFillStar></AiFillStar></span>
                            </div>
                            <div className='italic text-xs mb-1 line-clamp-2 sm:line-clamp-3 lg:line-clamp-4'>{movie?.overview + "..."}</div>
                        </div>
                    </div>

            }
        </>
    )
}

export default Movie