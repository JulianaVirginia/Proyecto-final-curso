// RESPONSIVE MENU 
const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");


open.addEventListener("click", () => {
    nav.classList.add("visibility")
})

close.addEventListener("click", () => {
    nav.classList.remove("visibility")
})