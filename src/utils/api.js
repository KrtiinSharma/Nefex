import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmYwYTZiZGI2MzhjMzAzZTdkNDdjNWFiY2Q4MTYwMiIsInN1YiI6IjY2NjgzNDRlNDE5YjI4ZWMxYTFjNTVhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AXPjR3TVRjo7B_2JO5onYwUYWmaRNbQ10QEvuO7fDUM"
const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const {data} = await axios.get(BASE_URL + url, {
      headers,
      params
    })
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}