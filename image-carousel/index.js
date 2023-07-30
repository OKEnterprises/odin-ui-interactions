const navZero = document.querySelector("#nav-0")
const navOne = document.querySelector("#nav-1")
const navTwo = document.querySelector("#nav-2")

const leftArr = document.querySelector(".left-arrow");
const rightArr = document.querySelector(".right-arrow")

const selectedImg = document.querySelector(".selected-img");

let selected = 0;

const images = ['./images/bailey-zindel-NRQV-hBF10M-unsplash.jpg',
                './images/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
                './images/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg'];

const navs = [navZero, navOne, navTwo];

function highlightNav(idx, navList) {
    navs[idx].classList.add('selected');
    for (let i = 0; i < navList.length; i++) {
        if (i != idx) navs[i].classList.remove('selected');
    }
}

function displayImg(idx) {
    const src = images[idx];
    selectedImg.src = src;
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
    if (selected === 0) selected = 2;
    else selected--;
    console.log(selected);
    highlightAndDisplay(selected, navs);
});

rightArr.addEventListener('click', () => {
    selected = (selected + 1) % 3;
    highlightAndDisplay(selected, navs);
});

highlightAndDisplay(selected, navs);