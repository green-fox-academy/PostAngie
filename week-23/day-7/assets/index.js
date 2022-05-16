import { genres, movies } from './movies.js';

// Modify the frontend to fetch the genres and the movies from the API.
// Note: the option values should contain the IDs of the movies and the genres, not their names.

// No, ez még folyamatban van....

async function getMovieList (input) {
    const resource = `/api/movies?${input}`;
    
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


function createMovieList(data) {
       
    // if (genre) {
    //     selectedMovies = movies.filter((movie) => movie.genres.includes(genre));
    // }

    let newElems = '<option value="">Select a movie</option>';
    data.forEach((movie) => {
        newElems += `<option value="${movie.id}">${movie.title}</option>`;
    });

    return newElems;
}

document.addEventListener('DOMContentLoaded', () => {
    const genreSelect = document.querySelector('#genre-select');
    const movieSelect = document.querySelector('#movie-select');

    genres.forEach((genre) => {
        const newOption = `<option value="${genre}">${genre}</option>`;
        genreSelect.innerHTML += newOption;
    });

    movieSelect.innerHTML = createMovieList();

    genreSelect.onchange = () => {
        movieSelect.innerHTML = createMovieList(genreSelect.value);
        titleElem.textContent = '-';
    }

    movieSelect.onchange = () => {
        const titleElem = document.querySelector('#selected-movie');
        titleElem.textContent = movieSelect.value || '-';
    };
});