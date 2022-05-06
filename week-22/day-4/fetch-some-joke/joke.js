const container = document.querySelector('.container');
const button = document.querySelector('button');
const errorMessage = document.querySelector('.errormsg');

async function getJoke () {
    try {
        const response = await fetch ('http://api.icndb.com/jokes/random');
        if (response.ok) {
            const data = await response.json();
            let paragraph = document.createElement('p');
            paragraph.innerHTML = `<p>${data.value.joke}</p>`
            container.appendChild(paragraph);
        } else {
            console.error (response.statusText);
            errorMessage.innerText = 'Cannot find a Joke'
        }
    } catch (error) {
        console.error(error);
        errorMessage.innerText = 'Something went wrong'
    }
}

button.onclick = () => {
    getJoke();
}