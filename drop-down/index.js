const menuHeader = document.querySelector(".menu-header");
const menuItems = document.querySelectorAll(".menu-item");
const menuContainer = document.querySelector(".menu-container");

let invis = true;

const toggleVisibility = (...comps) => {
    if (invis) {
        comps.forEach(comp => comp.classList.remove('invisible'));
        menuContainer.classList.remove('shrunk');
        invis = false;
    } else {
        comps.forEach(comp => comp.classList.add('invisible'));
        menuContainer.classList.add('shrunk');
        invis = true;
    }
    console.log(invis ? "invisible" : "visible")
}

menuHeader.addEventListener('click', () => { toggleVisibility(...menuItems) });