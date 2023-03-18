const menu = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");
const link4 = document.querySelector(".link4");
const link5 = document.querySelector(".link5");


menu.addEventListener('click', () => {
    nav.classList.add("open-nav")
});

close.addEventListener("click", () => {
    nav.classList.remove("open-nav")
});

link1.addEventListener("click", () => {
    nav.classList.remove("open-nav")
});
link2.addEventListener("click", () => {
    nav.classList.remove("open-nav")
});
link3.addEventListener("click", () => {
    nav.classList.remove("open-nav")
});
link4.addEventListener("click", () => {
    nav.classList.remove("open-nav")
});
link5.addEventListener("click", () => {
    nav.classList.remove("open-nav")
});