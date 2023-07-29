const navZero = document.querySelector("#nav-0")
const navOne = document.querySelector("#nav-1")
const navTwo = document.querySelector("#nav-2")

const leftArr = document.querySelector(".left-arrow");
const rightArr = document.querySelector(".right-arrow")

const selectedImage = document.querySelector(".selected-image");

let selected = 0;

const images = ['image-carousel/images/bailey-zindel-NRQV-hBF10M-unsplash.jpg',
                'image-carousel/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
                'image-carousel/images/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg'];

const navs = [navZero, navOne, navTwo];

function highlightNav(idx, navList) {
    navs[idx].classList.add('selected');
    for (let i = 0; i < navList.length; i++) {
        if (i != idx) navs[i].classList.remove('selected');
    }
}

function displayImg(idx) {
    const src = images[idx];
    selectedImage.src = src;
}

function highlightAndDisplay(idx, navList) {
    highlightNav(idx, navList);
    displayImg(idx);
}

navZero.addEventListener('click', () => {
    selected = 0;
    highlightAndDisplay(selected, navs);
});

navOne.addEventListener('click', () => {
    selected = 1;
    highlightAndDisplay(selected, navs);
});

navTwo.addEventListener('click', () => {
    selected = 2;
    highlightAndDisplay(selected, navs);
});

leftArr.addEventListener('click', () => {
    selected--;
    highlightAndDisplay(selected, navs);
});

rightArr.addEventListener('click', () => {
    selected++;
    highlightAndDisplay(selected, navs);
});

highlightAndDisplay(selected, navs);