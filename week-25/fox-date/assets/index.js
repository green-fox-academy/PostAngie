function showMessage(text) {
    const messages = document.querySelector('.msg');
    messages.textContent = '';
    messages.textContent = text;
}
function clearMessage(){
    const messages = document.querySelector('.msg');
    messages.textContent = '';
}

// function validateForm () {
// }

document.addEventListener('DOMContentLoaded', async () => {
    const button = document.querySelector('button');

    button.addEventListener('click', async (event) => {
        event.preventDefault();


        const data = {
            username: document.querySelector('#username').value,
            nickname: document.querySelector('#nickname').value,
            my_gender: document.querySelector('input[name="my_gender"]:checked').value,
            t_gender: document.querySelector('input[name="t_gender"]:checked').value,
            birth_year: document.querySelector('#birth_year').value,
            picture: document.querySelector('#picture').value,
            about_me: document.querySelector('#aboutme').value
        };
        
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorMsg = await response.json();
            showMessage(errorMsg.message);
            return;
        }
        clearMessage();
        window.location.assign(`/profiles/${data.username}`);

    })

})













// async function fillProfilePage(username) {
//     const url = `/api/users/${username}`
//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//         } else {
//             console.error(response.statusText);
//             return;
//         }
//     } catch (error) {
//         console.error(error)
//         return;
//     }

//     const profileContainer = document.querySelector('#profile-container');
//     profileContainer.innerHTML = `
//     <h1>${data.nickname} (${data.age}, ${data.my_gender}</h1>
//     <p>${data.about_me}</p>
//     <img src="${data.picture}" alt="This is a picture of ${data.nickname}">
//     <a href="">Start matching!</a>
//     `
// }
// 