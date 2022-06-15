const controls = document.querySelectorAll(".control");
let currentActive = document.querySelector(".control.active-btn");
const sections = document.querySelectorAll(".section")
const container = document.querySelector(".page-content")

controls.forEach(control => {
    control.addEventListener("click", () => {
        currentActive.classList.remove("active-btn")
        control.classList.add("active-btn");
        control.getAttribute("data-id")
        currentActive = document.querySelector(".control.active-btn");
    })
})

container.addEventListener("click", e => {
    if(e.target.dataset.id) {
        sections.forEach(control => {
            control.classList.remove("active");
        })
        const element = document.getElementById(e.target.dataset.id);
        element.classList.add("active")
    }
})

console.log(currentActive);