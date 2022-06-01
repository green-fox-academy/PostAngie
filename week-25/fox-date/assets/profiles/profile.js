document.addEventListener('DOMContentLoaded', async () => {
    const pathname = window.location.pathname.split('/');
    const username = pathname[2];

    const url = `/api/users/${username}`;
    const response = await fetch(url);
    if (!response.ok) {
        window.location.assign('/error.html')
    }


    const data = await response.json();
    const profileContainer = document.querySelector("#profile-container");
    profileContainer.innerHTML = `
        <h1>${data.nickname} (${data.age}, ${data.my_gender})</h1>
        <p>${data.about_me}</p>
        <img src="${data.picture}" alt="This is a picture of ${data.nickname}" width="100" height="100"><br>
        <a href="/match/${data.username}">Start matching!</a>
        `
})
