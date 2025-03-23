const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const glass = document.querySelector(".glass")
const visible = document.getElementById("glassmorph")
const input = document.querySelector(".inp")
const hour = document.querySelector(".hour-input")
const minute = document.querySelector(".minute-input")
const btns = document.querySelector(".buttons")

const btn = document.getElementById("button")
let currentTime = new Date();


minutes.textContent = currentTime.getMinutes();
seconds.textContent = currentTime.getSeconds();


btn.addEventListener('click', () => {
    if (visible.classList.contains("hidden")) {
        visible.classList.remove("hidden");
    }
    btns.classList.remove("hidden");

    input.style.display = "none"
    btn.style.display = "none";
    let stop = document.createElement("button")
    let cont = document.createElement("button")
    let reset = document.createElement("button")
    stop.textContent = "Stop"
    cont.textContent = "Continue"
    reset.textContent = "Reset"
    btns.classList.add("buttons")
    stop.classList.add("btns")
    cont.classList.add("btns")
    reset.classList.add("btns")

    /*     buton.addEventListener('click', () => {
            });  */
    btns.appendChild(stop)
    btns.appendChild(cont)
    btns.appendChild(reset)
});