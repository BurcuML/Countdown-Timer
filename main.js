const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const glass = document.querySelector(".glass")
const visible = document.getElementById("glassmorph")
const input = document.querySelector(".inp")
const btns = document.querySelector(".buttons")
const startButton = document.getElementById("startButton")


const audioContainer = document.createElement("div");
audioContainer.classList.add("hidden");

const audioElement = document.createElement("audio");
audioElement.loop = true;

const sourceElement = document.createElement("source");
sourceElement.src = "audio/ticking clock.mp3";
sourceElement.type = "audio/mp3";

audioElement.appendChild(sourceElement);
audioContainer.appendChild(audioElement);
document.body.appendChild(audioContainer);

let countdownInterval;
let totalSeconds = 0;

startButton.addEventListener('click', () => {
     
/* 
-burada hata almıştım ve bunun sebebi bu değişkenleri başta tanımlamam ve bu değerlerin click eventinde güncellenmemesiydi
-Bu kod, bir web sayfasındaki iki farklı input alanından (.minute-input ve .second-input sınıflarına sahip) kullanıcı tarafından girilen değerleri alır,
bu değerleri sayıya çevirir ve geçerli bir sayı değilse varsayılan olarak 0 atar. */ 
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

    // Butonları temizle
    while (btns.firstChild) {
        btns.removeChild(btns.firstChild); //butonların tekrarlanmasını önlüyor
    }

    visible.classList.remove("hidden");
    btns.classList.remove("hidden");
    input.style.display = "none";
    startButton.style.display = "none";


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
    startCountdown();

    //audio'yu butona basıldıktan sonra başlat
    audioElement.play()

    //Stop butonu
    stop.addEventListener('click', () => {
        clearInterval(countdownInterval); // Geri sayımı durdurur
        audioElement.pause();
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
    audioElement.pause()

    // Butonları temizle
    while (btns.firstChild) {
        btns.removeChild(btns.firstChild); //butonların tekrarlanmasını önlüyor
    }
    
});

// Continue butonuna olay ekle
cont.addEventListener('click', () => {
    startCountdown(); // Durdurulan geri sayımı devam ettir
    audioElement.play();
});

});



function startCountdown() {

    countdownInterval = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;

            // Dakika ve saniyeyi hesapla
            const mins = Math.floor(totalSeconds / 60);
            const secs = totalSeconds % 60;
/* 
padStart fonksiyonu ise bir string'in başına, belirli bir uzunluğa ulaşana kadar karakter ekliyor.
Örneğin, String(mins).padStart(2, "0") ifadesi, "mins" değişkeninin değerini string'e çeviriyor ve eğer bu string'in uzunluğu 2'den küçükse, başına "0" ekleyerek uzunluğunu 2'ye tamamlıyor. 
Yani, eğer "mins" 5 ise, bu ifade "05" string'ini döndürüyor. Eğer "mins" 12 ise, bu ifade "12" string'ini döndürüyor.
*/
            minutes.textContent = String(mins).padStart(2, "0");
            seconds.textContent = String(secs).padStart(2, "0");


        } else {
            clearInterval(countdownInterval);
            minutes.textContent = "00";
            seconds.textContent = "00";
            // 🔇 Ses durdurulsun
            audioElement.pause()            
            alert("Süre doldu!");

            
        } 
    }, 1000);

}
