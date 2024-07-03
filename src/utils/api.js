import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2VkOTMyMjQ2NzYzMDc2OTAxMzQ3MzEwMzAxNzU4OCIsInN1YiI6IjY0OTliNGM0YmJkMGIwMDE0NGY0ZTJlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mryFCpoBLhJJNjYWluJ1jWD2hvMD19F4B1_fHW7vPfM",
  },
};
export const fetchDataFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
