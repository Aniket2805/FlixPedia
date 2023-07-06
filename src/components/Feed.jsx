import React, { useContext} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Context } from '../context/contextAPI';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Movie from './Movie';
const Feed = () => {
    const { categoriesResults } = useContext(Context);
    let unique = 1;
    return (
        <div>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
                stopOnHover={false}
                key={unique}
            >
                {
                    categoriesResults.map((movie) => {
                        unique = movie?.id;
                        return (
                            <div className='text-white' key={movie?.id}>
                                <Link to={`/movie/${movie?.id}`}>
                                    <div className='h-[280px] sm:h-full lg:h-[600px]'>
                                        <img className='m-auto block w-[100%] h-full' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} />
                                    </div>
                                    <div className='absolute p-10 md:p-20 bottom-0 md:h-[70%] flex flex-col w-[100%] justify-end items-start text-left hover:opacity-100' style={{ backgroundImage: "linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1))", opacity: "1", transition: "opacity .3s"}}>
                                        <div className='text-amber-300/90 font-bold text-2xl sm:text-4xl md:text-5xl lg:text-7xl mb-3'>{movie?.original_title}</div>
                                        <div className='text-xl md:text-3xl sm:text-2xl font-bold text-white/70 flex mb-2'>
                                            {movie?.release_date}
                                            <span className='flex items-center ml-4'>{movie?.vote_average}<AiFillStar className='text-yellow-400 pt-1'></AiFillStar></span>
                                        </div>
                                        <div className='italic hidden sm:line-clamp-2 text-base w-[100%] md:w-[80%] lg:w-[60%] lg:line-clamp-none'>{movie?.overview}</div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </Carousel>
            <div className='bg-black z-0'>
                <h1 className='font-extrabold text-xl md:text-3xl lg:text-5xl px-20 text-center pt-10 text-white/80'>Latest Movies</h1>
                <div className='grow overflow-y-auto text-white px-10 py-10 sm:px-20 sm:py-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 justify-center'>
                        {
                            categoriesResults.map((movie) => {
                                return (
                                    <Movie key={movie?.id} movie={movie}></Movie>
                                )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed