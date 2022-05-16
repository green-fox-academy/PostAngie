document.addEventListener('DOMContentLoaded', async () => {
    const btn = document.querySelector('button');

    btn.addEventListener ('click', async (event) => {
        event.preventDefault();
        const username = document.querySelector('#username').value;
        const email = document.querySelector('#email').value;

        const cleanedName = username.replace(/\s{2,}/, " ");

        const errors = [];

        if (!cleanedName.match(/^\p{L}+\s\p{L}+$/)) {
            errors.push("Name is missing or too short. Please give us your full name!");
        }
        if (!email.match(/^[\w-\.]+@[\w-\.]+\.[\w]+$/)) {
            errors.push("Invalid E-mail address.");
        }
        if (errors.length > 0) {
            const errorBox = document.querySelector("#errors");
            errorBox.innerHTML = '';

            errors.forEach((error) => {
                errorBox.innerHTML += `<div>${error}</div>`;
            });
            return;
        }
        const data = {username, email};
        
        const response = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const responseData = await response.json();

        if (response.ok) {
            const container = document.querySelector('.container');
            const success = document.createElement('h1');
            success.id = "success";
            success.innerText = `Thanks ${responseData.username}, we will send updates to ${responseData.email}`;
            container.appendChild(success);
        } else {
           console.error(response.status);
            errors.push('Sorry, This is an Error. Something went wrong.');
        }
    })
})