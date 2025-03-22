const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const glass= document.querySelector(".glass")
const visible = document.getElementById("glassmorph")

const btn = document.getElementById("button")



btn.addEventListener('click', () => {
    if (glassmorph.classList.contains("hidden")) {
        glassmorph.classList.remove("hidden");
    } else {
        glassmorph.classList.add("hidden");
    }
});