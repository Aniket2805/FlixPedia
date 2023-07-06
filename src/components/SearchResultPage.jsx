import React, { useContext, useState, useEffect } from 'react'
import { fetchDataFromAPI } from "../utils/api"
import { Context } from '../context/contextAPI';
import { useParams } from 'react-router-dom';
import SearchResultVideoCard from './SearchResultVideoCard';
import Movie from './Movie';
const SearchResultPage = () => {
    const { searchQuery } = useParams();
    const { setloading } = useContext(Context);
    const [searchResults, setSearchResults] = useState([])
    useEffect(() => {
        fetchSearchResult();
    }, [searchQuery]);
    const fetchSearchResult = () => {
        setloading(true);
        fetchDataFromAPI(`search/movie?query=${searchQuery}`).then((res) => {
            console.log(res);
            setSearchResults(res?.results);
            setloading(false);
        })
    }
    return (
        <div className='lg:px-36 md:px-20 md:py-5'>
            <div className='hidden md:flex flex-col'>
                <h1 className='text-center text-black/70 md:text-4xl text-xl font-bold'>{"Showing Results for " + searchQuery}</h1>
                {
                    searchResults?.map((movie) => {
                        return (
                            movie?.backdrop_path && <SearchResultVideoCard key={movie?.id} movie={movie} />
                        )
                    })
                }
            </div>
            <div className='flex flex-col md:hidden'>
                <div className='grow overflow-y-auto text-white px-10 py-8 sm:px-20 sm:py-15 bg-black'>
                    <h1 className='font-extrabold text-2xl md:text-3xl lg:text-5xl text-center pb-14'>{"Showing Results for " + searchQuery}</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 justify-center'>
                        {
                            searchResults?.map((movie) => {
                                return (
                                    movie?.backdrop_path && <Movie key={movie?.id} movie={movie}></Movie>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResultPage