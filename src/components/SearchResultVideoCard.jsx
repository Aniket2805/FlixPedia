import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../context/contextAPI';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SearchResultVideoCard = ({ movie }) => {
    return (
        <Link to={`/movie/${movie?.id}`}>
            <div className='flex md:flex-row flex-col justify-center items-center md:justify-between mb-16 mt-2 md:my-10 transition-transform duration-300 lg:hover:bg-gray-400/25 rounded-[15px]'>
                <div className='md:w-[30%] lg:w-[25%] w-[100%]'>
                    <img className='rounded-[15px] border-black border-[2px]' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} />
                </div>
                <div className='flex flex-col md:w-[60%] justify-center text-xl gap-2'>
                    <span className='text-2xl md:text-3xl lg:text-5xl font-bold md:mb-20 drop-shadow-[0px_0px_5px_lightgray] text-yellow-700/90'>
                        {movie?.original_title}
                    </span>
                    <span className='text-green-900 font-bold'>{movie?.release_date}</span>
                    <div className='flex'>
                        <span className='flex items-center'>{movie?.vote_average}<AiFillStar className='text-yellow-600'></AiFillStar></span>
                        <span className='ml-4'>{"(" + movie?.vote_count + ") votes"}</span>
                    </div>
                    <span className='empty:hidden text-md line-clamp-1 md:line-clamp-2 lg:pr-24'>
                        {movie?.overview}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default SearchResultVideoCard