const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const glass = document.querySelector(".glass")
const visible = document.getElementById("glassmorph")
const input = document.querySelector(".inp")
const minute = parseInt(document.querySelector(".minute-input").value)
const second = parseInt(document.querySelector(".second-input").value)
const btns = document.querySelector(".buttons")
const startButton = document.getElementById("startButton")

let countdownInterval;
let isPaused = false;
let totalSeconds=0;

startButton.addEventListener('click', () => {

    if (!isNaN(minute) && minute >= 0 && second >= 0 && second < 60) {
        totalSeconds = (minute * 60) + second;
/*         if(second==""){
            second="00";
        } */

    }else{
        alert("Lütfen geçerli bir süre girin!");
        return
    }

    visible.classList.remove("hidden");
    btns.classList.remove("hidden");
    input.style.display = "none";
    startButton.style.display = "none";

    // Remove existing buttons to prevent duplicates
    while (btns.firstChild) {
        btns.removeChild(btns.firstChild);
    }

    // Yeni butonları oluştur
    let stop = document.createElement("button");
    let cont = document.createElement("button");
    let reset = document.createElement("button");

    stop.textContent = "Stop";
    cont.textContent = "Continue";
    reset.textContent = "Reset";

    btns.classList.add("buttons");
    stop.classList.add("btns");
    cont.classList.add("btns");
    reset.classList.add("btns");

    // Butonları ekle
    btns.appendChild(stop);
    btns.appendChild(cont);
    btns.appendChild(reset);
    
    //Geri sayımı başlatmak için
    startCountdown()

    //Stop butonu
    stop.addEventListener('click', () => {
        clearInterval(countdownInterval); // Geri sayımı durdurur
    });

    // Reset butonuna olay ekle
    reset.addEventListener('click', () => {
        clearInterval(countdownInterval);
        totalSeconds = 0;
        visible.classList.add("hidden");
        btns.classList.add("hidden");
        input.style.display = "inline";
        startButton.style.display = "inline";
        minutes.textContent = "00";
        seconds.textContent = "00";

        // Butonları temizle
        while (btns.firstChild) {
            btns.removeChild(btns.firstChild);
        }

    });
});

function startCountdown() {
    countdownInterval = setInterval(() => {

    })
}