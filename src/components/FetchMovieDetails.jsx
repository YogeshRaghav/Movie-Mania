const FetchMovieDetails = async (type) => {
  const api_key = "2e9da9a3cfe6fb49043769ce9d3a74d8";
  const baseUrl = type && `https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}`;

  try {
    const initialResponse = await fetch(baseUrl);
    const res = await initialResponse.json();

    let totalPages = res.total_pages;
    if (totalPages > 160) {
      totalPages = 160;
    }
    let allMovies = [...res.results];

    for (let page = 2; page <= totalPages; page++) {
      const response = await fetch(`${baseUrl}&page=${page}`);
      const data = await response.json();

      allMovies = [...allMovies, ...data.results];
    }

    return allMovies;
  } catch (error) {
    console.log("Error while fetching data", error);
  }
};
export default FetchMovieDetails;
