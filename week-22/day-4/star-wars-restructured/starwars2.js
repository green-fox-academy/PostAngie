async function getCharacters(text) {
    const url = `https://swapi.dev/api/people/?search=${text}`;

    try {
        const response = await fetch(url);
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

async function getMovies(filmUrl) {
    try {
        const response = await fetch(filmUrl);
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
    const searchBtn = document.querySelector('button');

    searchBtn.addEventListener('click', async (event) => {
        event.preventDefault();
        let input = document.querySelector('#search').value;
        const characters = await getCharacters(input);
        const nameList = document.querySelector('.name-list');
        nameList.innerHTML = '';

        characters.results.forEach((charName) => {
            const list = document.createElement('ul');
            list.innerHTML += `<li>${charName.name}</li>`;

            list.addEventListener('click', async (e) => {
                const movieList = document.querySelector('.movie-list');
                movieList.innerHTML = '';

                charName.films.forEach(async (f) => {
                    let filmData = await getMovies(f);
                    const movieData = document.createElement('ul');
                    movieData.innerHTML += `
                    <li>${filmData.title} - ${filmData.release_date}</li>
                    `;
                    movieList.appendChild(movieData);
                });
            });
            nameList.appendChild(list);
        });
        const instruction = document.querySelector('.instruction');
        instruction.style.display = 'block';
    });
});