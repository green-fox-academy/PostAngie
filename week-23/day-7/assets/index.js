// Modify the frontend to fetch the genres and the movies from the API.
// Note: the option values should contain the IDs of the movies and the genres, not their names.

async function getGenres (){
    const resource = `/api/genres`;

    try {
        const response = await fetch(resource);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error(response.statusText);
            return;
        }
    } catch (error) {
        console.error(error)
        return;
    }
}

async function createMovieList (data) {
    const movieSelect = document.querySelector('#movie-select');
    movieSelect.innerHTML = `<option value="">Select a movie</option>`
    data.forEach((movie) => {
        const newOption = `<option value="${movie.title}">${movie.title}</option>`;
        movieSelect.innerHTML += newOption;
    });
}


async function getMovieList() {
   
    const resource = `/api/movies`;

    try {
        const response = await fetch(resource);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error(response.statusText);
            return;
        }
    } catch (error) {
        console.error(error)
        return;
    }
}

async function getFilteredMovieList (filter) {
    const resource = `/api/movies?genre=${filter}`;

    try {
        const response = await fetch(resource);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error(response.statusText);
            return;
        }
    } catch (error) {
        console.error(error)
        return;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const genreSelect = document.querySelector('#genre-select');
    const movieSelect = document.querySelector('#movie-select');
    const titleElem = document.querySelector('#selected-movie');

    const genres = await getGenres();
    genres.forEach((genre) => {
        const newOption = `<option value="${genre.genre}">${genre.genre}</option>`;
        genreSelect.innerHTML += newOption;
    });
    const movieList = await getMovieList();
    let renderedList = createMovieList(movieList);
  

    genreSelect.onchange = async () => {
        let filteredMovies = await getFilteredMovieList(genreSelect.value);
        renderedList = createMovieList(filteredMovies);
        titleElem.textContent = '-';
    }

    movieSelect.onchange = async () => {
        titleElem.textContent = movieSelect.value || '-';
    };
});