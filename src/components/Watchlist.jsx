import React, { useEffect } from 'react'
import { useState } from 'react'
import Movie from './Movie'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../context/firebaseConfig'
const Watchlist = () => {
  const collectionRef = collection(db, 'movies');
  const [watchData, setWatchData] = useState([]);
  const getData = () => {
    getDocs(collectionRef)
      .then((res) => {
        setWatchData(
          res.docs.map((item) => {
            return item.data();
          })
        )
      })
      .catch((err) => {
        console.log(err.message);
      })
  }
  useEffect(() => {
    getData();
  }, [watchData])
  return (
    <div className='bg-black'>
      <h1 className='font-extrabold text-xl md:text-3xl lg:text-5xl px-20 text-center pt-10 text-white/80'>My Watchlist</h1>
      <div className='grow overflow-y-auto text-white px-10 py-10 sm:px-20 sm:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16'>
          {
            watchData.map((movie) => {
              return (
                <Movie key={movie?.id} movie={movie}></Movie>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Watchlist