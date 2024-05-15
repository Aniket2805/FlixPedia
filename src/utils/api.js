import axios from "axios";
const BASE_URL = "https://real-time-product-search.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3be0e33758msh9fd930a8a64b125p182549jsn35e012d0dc61",
    "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
  },
};
export const fetchDataFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
