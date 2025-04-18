export async function getMoviesByCategory(cat_id) {
    try {
      const response = await fetch(`https://www.goolu.in/api/movie/get_movies.php?cat_id=${cat_id}`);
      const json = await response.json();
  
      if (json.msg === 'success' && Array.isArray(json.all_movies)) {
        return json.all_movies;
      } else {
        console.error('Unexpected API response:', json);
        return [];
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  }
  