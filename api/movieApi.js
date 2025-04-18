// api/movieApi.ts

export async function getMovieCategories() {
  try {
    const response = await fetch('https://www.goolu.in/api/movie/category.php');
    const json = await response.json();
    if (json.msg === 'success' && Array.isArray(json.all_cat)) {
      return json.all_cat;
    } else {
      console.error('Unexpected API response:', json);
      return [];
    }
  } catch (error) {
    console.error('Error fetching movie categories:', error);
    return [];
  }
}
