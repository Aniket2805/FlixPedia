import React, { useContext, useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fetchDataFromAPI } from "../utils/api"
import { Context } from '../context/contextAPI';
import { AiFillStar } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Movie from './Movie';
const MoiveDetail = () => {
    const { id } = useParams();
    const { setloading } = useContext(Context);
    const [movieData, setMovieData] = useState();
    const [similarmovieData, setsimilarMovieData] = useState();
    useEffect(() => {
        fetchMovieData(id);
        fetchReleatedMovieData(id + "/similar");
    }, [id]);
    const fetchMovieData = (query) => {
        setloading(true);
        fetchDataFromAPI(`movie/${query}?language=en-US`).then((res) => {
            // console.log(res);
            setMovieData(res);
            setloading(false);
        })
    }
    const fetchReleatedMovieData = (query) => {
        setloading(true);
        fetchDataFromAPI(`movie/${query}?language=en-US`).then((res) => {
            // console.log(res);
            setsimilarMovieData(res?.results);
            setloading(false);
        })
    }
    return (
        <>
            <div className='w-[100%] relative flex flex-col items-center'>
                <div className='lg:w-[80%]'>
                    <img className='w-[100%] lg:h-[600px] object-cover object-[0,35%]' src={`https://image.tmdb.org/t/p/original/${movieData?.backdrop_path}`} />
                </div>
                <div className='flex items-center w-[90%] lg:w-[75%] relative bottom-[120px] min-[380px]:bottom-[130px] min-[440px]:bottom-[160px] min-[540px]:bottom-[180px] sm:bottom-[220px] md:bottom-[270px]'>
                    <div className='mr-[30px] w-[40%] min-[450px]:w-[35%] sm:w-[30%]'>
                        <div><img className='rounded-xl shadow-[0px_22px_40px_6px_rgba(0,0,0,0.86)]' src={`https://image.tmdb.org/t/p/original/${movieData?.poster_path}`} /></div>
                    </div>
                    <div className='flex flex-col justify-between w-[60%] min-[450px]:w-[65%] sm:w-[70%]'>
                        <div className='text-white text-sm sm:text-base md:text-lg'>
                            <div className='mb-1 sm:mb-3 drop-shadow-[0px_0px_5px_#000000] text-yellow-300 font-bold text-base min-[440px]:text-xl sm:text-2xl md:text-4xl lg:text-6xl'>{movieData?.original_title}</div>
                            <div className='mb-1 sm:mb-2 drop-shadow-[0px_0px_5px_#000000]'>{movieData?.tagline}</div>
                            <div className='mb-1 sm:mb-2 drop-shadow-[0px_0px_5px_#000000] flex'>
                                <span className='flex items-center'>{movieData?.vote_average}<AiFillStar></AiFillStar></span>
                                <span className='ml-4'>{"(" + movieData?.vote_count + ") votes"}</span>
                            </div>
                            <div className='mb-1 sm:mb-2 drop-shadow-[0px_0px_5px_#000000]'>{movieData?.runtime + "mins"}</div>
                            <div className='mb-1 sm:mb-2 drop-shadow-[0px_0px_5px_#000000]'>{"Release Date: " + movieData?.release_date}</div>
                            <div className='mb-1 sm:mb-2 drop-shadow-[0px_0px_5px_#000000] my-5 flex justify-start gap-2 flex-wrap'>
                                {movieData?.genres?.map((genre) => {
                                    return <span key={genre?.id} className='px-2 py-1 rounded-[20px] border-solid border-2 border-white bg-black/40 text-white/90'>{genre?.name}</span>
                                })}
                            </div>
                        </div>
                        <div className='my-8 text-[15px] md:text-lg hidden sm:flex sm:flex-col'>
                            <div className='text-xl md:text-2xl mb-5 font-semibold flex relative items-center'>Synopsis</div>
                            <div className='ml-auto'>{movieData?.overview}</div>
                        </div>
                    </div>
                </div>
                <div className='my-8 text-[15px] md:text-lg sm:hidden flex-[.9] relative bottom-[110px] sm:bottom-[150px] w-[90%]'>
                    <div className='text-xl md:text-2xl mb-5 font-semibold flex relative items-center'>Synopsis</div>
                    <div className='ml-auto'>{movieData?.overview}</div>
                </div>
                <div className='relative bottom-[90px] sm:bottom-[120px] flex flex-col sm:flex-row justify-center sm:justify-between w-[90%] lg:w-[75%]'>
                    <div className='text-2xl flex items-center mb-5 sm:mb-0 md:text-4xl font-medium text-black/90 justify-center sm:justify-start'>Useful Links</div>
                    <div className='flex flex-col justify-center min-[333px]:flex-row min-[333px]:justify-between sm:gap-2'>
                        {
                            movieData?.homepage &&
                            <a href={movieData.homepage} target="_blank">
                                <p className='flex justify-center'><span className='flex justify-center items-center py-[8px] md:py-[12px] px-3 rounded-[20px] w-[150px] font-bold bg-blue-700 text-white max-[333px]:mb-4'>Homepage<FiExternalLink className='ml-3'></FiExternalLink></span></p>
                            </a>
                        }
                        {
                            movieData?.imdb_id &&
                            <a href={"https://www.imdb.com/title/" + movieData.imdb_id} target="_blank">
                                <p className='flex justify-center'><span className='flex justify-center items-center py-[8px] md:py-[12px] px-6 rounded-[20px] w-[150px] font-bold bg-yellow-700 text-white'>IMDB<FiExternalLink className='ml-6'></FiExternalLink></span></p>
                            </a>
                        }
                    </div>
                </div>
                <div className='text-3xl text-center sm:text-4xl font-semibold'>Production Companies</div>
                <div className='md:w-[85%] flex flex-col sm:flex-row sm:justify-center sm:flex-wrap px-10'>
                    {
                        movieData?.production_companies?.map((company) => {
                            return (
                                <div key={company?.id}>
                                    {
                                        company?.logo_path &&
                                        <div className='flex flex-col items-center justify-center'>
                                            <img className='w-[200px] m-4 md:m-8' src={"https://image.tmdb.org/t/p/original" + company?.logo_path} />
                                            <span>{company?.name}</span>
                                        </div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <div className='grow overflow-y-auto text-white px-10 py-10 sm:px-20 mt-8 sm:py-20 bg-black'>
                    <h1 className='font-extrabold text-2xl md:text-3xl lg:text-5xl text-center pb-14'>Similar Movies</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 justify-center'>
                        {
                            similarmovieData?.map((movie) => {
                                return (
                                    movie?.backdrop_path && <Movie key={movie?.id} movie={movie}></Movie>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoiveDetail