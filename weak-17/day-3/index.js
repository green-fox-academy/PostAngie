window.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        slideIndex += n;
        showSlides(slideIndex);
    }

    function minusSlides(n) {
        slideIndex -= n;
        showSlides(slideIndex);
    }

    let arrowList = document.getElementsByClassName('arrow');
    arrowList[0].onclick = function () {
        minusSlides(1);
    }
    arrowList[1].onclick = function () {
        plusSlides(1);
    }

    // function currentSlide(n) {
    //     slideIndex = n;
    //     showSlides(slideIndex);
    // }

    function createThumbnails() {
        let thumbnailSection = document.getElementById('thumbnails');
        for (let i = 0; i < images.length; i++) {
            let image = document.createElement('img');
            image.src = images[i].file;
            thumbnailSection.appendChild(image);
        }
    }

    createThumbnails();


    function showSlides(n) {
        if (n > images.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = images.length;
        }
        let slide = document.getElementsByClassName("img-demo")[0];
        let imgTitle = document.querySelector('.img-title');
        let imgInfo = document.querySelector('.img-info');
        slide.innerHTML = "";
        let image = document.createElement('img');
        image.src = images[slideIndex - 1].file;
        slide.appendChild(image);
        imgTitle.innerHTML = images[slideIndex - 1].title;
        imgInfo.innerHTML = images[slideIndex - 1].description;

    }


})