import React, { useContext, useEffect } from 'react'
import { Context } from '../context/contextAPI';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../index.css';
const Movie = ({ movie }) => {
    const { loading,setloading } =useContext(Context);
    useEffect(() => {
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
                    <Link to={`/movie/${movie?.id}`}>
                        <div className='inline-block transition-transform duration-200 relative rounded-[12px] overflow-hidden z-0 border-2 border-solid border-white/70 cards'>
                            <img src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}/>
                            <div className='movie_info opacity-100 md:opacity-0'>
                                <div className='font-bold text-base mb-2'>{movie?.original_title}</div>
                                <div className='text-xs mb-1'>
                                    {movie?.release_date}
                                    <span className='float-right flex items-center'>{movie?.vote_average}<AiFillStar></AiFillStar></span>
                                </div>
                                <div className='italic text-xs mb-1 line-clamp-2 sm:line-clamp-3 lg:line-clamp-4'>{movie?.overview + "..."}</div>
                            </div>
                        </div>
                    </Link>
            }
        </>
    )
}

export default Movie