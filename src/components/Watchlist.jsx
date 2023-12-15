import React, { useEffect } from "react";
import { useState } from "react";
import Movie from "./Movie";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../context/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Watchlist = () => {
  const [watchData, setWatchData] = useState([]);
  const naviagte = useNavigate();
  const getData = () => {
    const movieRef = doc(db, "movie", auth?.currentUser?.uid);
    onSnapshot(movieRef, (res) => {
      res?.data() != null &&
        setWatchData(
          Object.values(res?.data())?.map((item) => {
            return item;
          })
        );
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (auth == null || auth.currentUser == null) {
        naviagte("/signin");
      } else {
        getData();
      }
    });
  }, []);
  return watchData.length != 0 ? (
    <div className="">
      <h1 className="font-extrabold text-2xl md:text-3xl lg:text-5xl px-20 text-center pt-10 text-black/80">
        My Watchlist
      </h1>
      <div className="grow overflow-y-auto text-white px-10 py-10 sm:px-20 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
          {watchData?.map((movie) => {
            return <Movie key={movie?.id} movie={movie}></Movie>;
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className="h-[90vh] flex justify-center items-center">
      <h1 className="text-black/80 text-5xl font-extrabold font-serif">
        Watchlist is empty
      </h1>
    </div>
  );
};

export default Watchlist;
