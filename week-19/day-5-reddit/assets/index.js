// Todos:
// implement modify and remove links
// fix up and down buttons to modify button, after voting
// implement sidebar button to link to post page
// implement post page

function fillPostBox (data) {
    const postContainer = document.querySelector('#post-container');

    data.posts.forEach(element => {
        let postDate = new Date(element.timestamp *1000).toLocaleString();
        
        let postBox = `
        <div id="${element.id}" class="post-box">
            <h3><a href="${element.url}">${element.title}</a></h3>
            <p>${postDate}  Posted by: ${element.user_name || "Anonymus"}</p>
            <div class="vote">
                <button class="${element.id}" value="up">up</button>
                <p class="${element.id}">${element.score}</p>
                <button class="${element.id}" value="down">down</button>
                <a href="http://">modify</a>
                <a href="http://">remove</a>
            </div>
        </div>`
        postContainer.innerHTML += postBox;
    });
}
function displayUpdatedScore (){

}

async function vote (id, upOrDown) {
    try {
        const response = await fetch(`/posts/${id}/${upOrDown}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            console.error(response.statusText);
        }
        const data = await response.json();
        let newScore = data.score;
        let scoreDisplay = document.querySelector(`p[class="${id}"]`);
        scoreDisplay.innerText = newScore;
    } catch (error) {
        console.error(error);
    }
}


window.addEventListener('DOMContentLoaded', async () => {
    let response, data;

    try {
        response = await fetch('/home');
        data = await response.json();
    } catch (err) {
        alert(err);
    }

    fillPostBox(data);

    const upButtons = document.querySelectorAll('button[value="up"]');
    const downButtons = document.querySelectorAll('button[value="down"]');

    upButtons.forEach (upBtn => {
        upBtn.addEventListener ('click', (event) => {
            let param = upBtn.className;
            vote(param, 'upvote');
        })
    })

    downButtons.forEach (downBtn => {
        downBtn.addEventListener ('click', (event) => {
            let param = downBtn.className;
            vote(param, 'downvote');
        })
    })
    
    
});