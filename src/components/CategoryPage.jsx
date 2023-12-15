import React, { useContext, useEffect } from "react";
import { Context } from "../context/contextAPI";
import { useParams } from "react-router-dom";
import Movie from "./Movie";
import "../index.css";
const CategoryPage = () => {
  const { categoriesResults, setSelectCategories } = useContext(Context);
  const { category } = useParams();
  useEffect(() => {
    setSelectCategories(category ? category : "now_playing");
  }, [category]);
  return (
    <div>
      <h1 className="font-extrabold text-xl md:text-3xl lg:text-5xl px-20 text-center pt-10 text-black/80">
        {category?.toUpperCase()}
      </h1>
      <div className="grow overflow-y-auto text-white px-10 py-10 sm:px-20 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
          {categoriesResults.map((movie) => {
            return <Movie key={movie?.id} movie={movie}></Movie>;
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
