const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const glass= document.querySelector(".glass")
const visible = document.getElementById("glassmorph")
const input= document.querySelector(".inp")

const btn = document.getElementById("button")
let currentTime = new Date();

hours.textContent = currentTime.getHours();
minutes.textContent = currentTime.getMinutes();
seconds.textContent = currentTime.getSeconds();


btn.addEventListener('click', () => {
    if (visible.classList.contains("hidden")) {
        visible.classList.remove("hidden");
    } 

    input.style.display ="none"
    btn.style.display= "none";
    let stop = document.createElement("button")
    let cont = document.createElement("button")
    let reset = document.createElement("button")
    stop.textContent = "Stop"
    cont.textContent = "Continue"
    reset.textContent = "Reset"
    stop.style.padding = "10px"
    cont.style.padding = "10px"
    reset.style.width = "50px"
    stop.style.position = "absolute"
    cont.style.position = "absolute"
    stop.style.top = "70%"
    stop.style.left = "50%"
    cont.style.top = "70%"
    cont.style.left = "45%"
/*    stop.textContent = "Stop"
    stop.style.width = "50px"
    stop.style.position = "absolute"
    stop.style.top = "70%"
    stop.style.left = "50%"
  button1.textContent = "Stop"
    button1.style.position = "absolute"
    button1.style.top = "70%"
    button1.style.left = "50%"
    button1.style.display = "block"
    button1.style.zIndex = "1"
    button2.textContent = "Continue"
    button2.style.position = "absolute"
    button2.style.top = "70%"
    button2.style.left = "45%"
    button2.style.display = "block"
    button2.style.zIndex = "1" 

    buton.addEventListener('click', () => {
        });*/    
    document.body.appendChild(stop)
    document.body.appendChild(cont)
    document.body.appendChild(reset)
});