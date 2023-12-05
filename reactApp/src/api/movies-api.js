export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=12430810247c9c7035b93bfe4b8db103&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };