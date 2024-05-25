import axios from "axios";
const BASE_URL = "https://real-time-product-search.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3fc742d33amsh2b3c1390930b288p1eb281jsn0c671a8dae7a",
    "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
  },
};
export const fetchDataFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
