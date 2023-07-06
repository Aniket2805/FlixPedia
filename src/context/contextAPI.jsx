import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromAPI } from "../utils/api"

export const Context = createContext();
export const AppContext = (props) => {
    const [loading, setloading] = useState(false)
    const [categoriesResults, setcategoriesResults] = useState([])
    const [selectCategories, setSelectCategories] = useState("now_playing");
    const [mobileMenue, setMobileMenue] = useState();
    useEffect(() => {
        fetchSelectedCategoryData(selectCategories);
    }, [selectCategories]);
    const fetchSelectedCategoryData = (query) => {
        setloading(true);
        fetchDataFromAPI(`movie/${query}?language=en-US`).then(({results}) => {
            // console.log(results);
            setcategoriesResults(results);
            setloading(false);
        });
    }
    return (
        <Context.Provider value={{ loading, setloading, categoriesResults , setcategoriesResults,selectCategories, setSelectCategories, mobileMenue, setMobileMenue }}>
            {props.children}
        </Context.Provider>
    )
}