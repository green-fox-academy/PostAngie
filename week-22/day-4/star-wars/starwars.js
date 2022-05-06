const nameList = document.querySelector('.name-list');
const movieList = document.querySelector('.movie-list');
const searchBtn = document.querySelector('button');
const instruction = document.querySelector('.instruction');

document.addEventListener('DOMContentLoaded', async () => {
    async function fetchMovies(filmUrl) {
        try {
            const response = await fetch(filmUrl);
            if (response.ok) {
                return result = await response.json();
            } else {
                console.error(response.statusText);
            }
        } catch (error) {
            console.error(error)
        }
    }

    async function DisplayCharacters() {
        let input = document.querySelector('#search').value;
        const url = `https://swapi.dev/api/people/?search=${input}`
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();

                data.results.forEach((n) => {
                    const list = document.createElement('ul');
                    list.innerHTML += `
                    <li class="char">${n.name}</li>
                    `;
                    list.addEventListener('click', async (e) => {
                        movieList.innerHTML = '';
                        n.films.forEach(async (f) => {
                            let filmData = await fetchMovies(f);
                            const movieData = document.createElement('ul');
                            movieData.innerHTML += `
                            <li>${filmData.title} - ${filmData.release_date}</li>
                            `;
                            movieList.appendChild(movieData);
                        });
                    })
                    nameList.appendChild(list);
                });
            } else {
                console.error(response.statusText);
            }
        } catch (error) {
            console.error(error)
        }
    }

    searchBtn.addEventListener('click', (event) => {
        event.preventDefault();
        nameList.innerHTML = '';
        DisplayCharacters();
        instruction.style.display = 'block';
    })
});