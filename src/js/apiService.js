const API_KEY = '23041053-38a542f3c2a7583b665450b75';

export default function fetchImages(searchQuery, pageNumber) {
  return (
    fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${API_KEY}`,
    )
      .then(response => response.json())
      // .then(data => data.hits)
      .catch(error => Promise.reject(error))
  );
}
