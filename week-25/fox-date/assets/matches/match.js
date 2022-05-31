async function getRandomUser(activeUser) {
    const url = `/api/random-user?username=${activeUser}`;
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.error(response.statusText);
    }
}
function displayRandomUser(data) {
    const container = document.querySelector("#main-container");
    container.innerHTML = `
        <h1>${data.nickname} (${data.age}, ${data.my_gender})</h1>
        <p>${data.about_me}</p>
        <img src="${data.picture}" alt="This is a picture of ${data.nickname}" width="100" height="100"><br>
        `
}
document.addEventListener('DOMContentLoaded', async () => {
    const pathname = window.location.pathname.split('/');
    const activeUser = pathname[2];
    const header = document.querySelector('#header');
    header.innerHTML += `<a href="/profiles/${activeUser}">${activeUser}</a>`
    const randomContent = await getRandomUser();
    displayRandomUser(randomContent);

    const dislike = document.querySelector('#dislike');
    dislike.addEventListener('click', async (event) => {
        event.preventDefault();
        randomContent = await getRandomUser();
        displayRandomUser(randomContent);
    })

    const like = document.querySelector('#like');
    like.addEventListener('click', async (event) => {
        event.preventDefault();
        const data = {
            source_username: activeUser,
            target_username: randomContent.username
        }

        const response = await fetch('/api/links', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const message = await response.json();
        if (message.message = "It is a match!") {
            window.alert(message.message);
            randomContent = await getRandomUser();
        }
        randomContent = await getRandomUser();
    });
});