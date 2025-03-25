const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const glass = document.querySelector(".glass")
const visible = document.getElementById("glassmorph")
const input = document.querySelector(".inp")
const btns = document.querySelector(".buttons")
const startButton = document.getElementById("startButton")

let countdownInterval;
let isPaused = false;
let totalSeconds = 0;

startButton.addEventListener('click', () => {
     // burada hata almıştım ve bunun sebebi bu değişkenleri başta tanımlamam ve bu değerlerin click eventinde güncellenmemesiydi
    const minute = parseInt(document.querySelector(".minute-input").value.trim()) || 0;
    const second = parseInt(document.querySelector(".second-input").value.trim()) || 0;

    if (isNaN(minute) || isNaN(second) || minute < 0 || second < 0 || second >= 60) {
        alert("Lütfen geçerli bir dakika ve saniye girin!");
        return;
    }

    totalSeconds = (minute * 60) + second;

    if (totalSeconds <= 0) {
        alert("Lütfen sıfırdan büyük bir süre girin!");
        return;
    }

    visible.classList.remove("hidden");
    btns.classList.remove("hidden");
    input.style.display = "none";
    startButton.style.display = "none";

    minute.innerHTML = "";

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

    isPaused=false;
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

    // Continue butonuna olay ekle
     cont.addEventListener('click', () => {
       
    if (isPaused) {
        isPaused=false;
        startCountdown(); // Durdurulan geri sayımı devam ettir
    }


});
        // Butonları temizle
        while (btns.firstChild) {
            btns.removeChild(btns.firstChild); //butonların tekrarlanmasını önlüyor
        }

    });
});



function startCountdown() {
    countdownInterval = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;

            // Dakika ve saniyeyi hesapla
            const mins = Math.floor(totalSeconds / 60);
            const secs = totalSeconds % 60;

            minutes.innerHTML = String(mins).padStart(2, "0");
            seconds.innerHTML = String(secs).padStart(2, "0");

        } else {
            clearInterval(countdownInterval);
            minutes.textContent = "00";
            seconds.textContent = "00";
            alert("Süre doldu!");
        }
    }, 1000);

}