window.addEventListener('DOMContentLoaded', async () => {
    const btn = document.querySelector('button');
    btn.addEventListener ('click', async (event) => {
        event.preventDefault();
        const title = document.querySelector('#title').value;
        const url = document.querySelector('#url').value;

        const errors = [];

        if (!title) {
            errors.push("Please give a title!");
        }
        if (!url) {
            errors.push("Please give a valid url.");
        }
        if (errors.length > 0) {
            const errorBox = document.querySelector("#errors");
            errorBox.innerHTML = '';

            errors.forEach((error) => {
                errorBox.innerHTML += `<div>${error}</div>`;
            });
            return;
        }
        const data = {title, url};
        
        const response = await fetch('/posts', {
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
            success.innerText = `Thanks, your post with "${responseData.title}" is public now.`;
            container.appendChild(success);
            setTimeout(() => {
                window.location.href ="http://localhost:3000/";
            }, 3000);
          
        } else {
           console.error(response.status);
            errors.push('Sorry, This is an Error. Something went wrong.');
        }
    })

    
    
});