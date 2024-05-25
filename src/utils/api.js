import axios from "axios";
const BASE_URL = "https://real-time-product-search.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0f0dd2d684mshaf5ee0b7f7361f7p162f0fjsnad3e59b26f5f",
    "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
  },
};
export const fetchDataFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
