// Navbar mobil menyusi
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    });
});

// Valyuta Konvertori
function convertCurrency() {
    let usd = parseFloat(document.getElementById('in').value);
    let uzs = usd * 12940;
    document.getElementById('result').textContent = "UZS: " + uzs.toLocaleString();
}

// Kalkulyator funksiyalari
const screen = document.getElementById('screen');

function appendValue(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = '';
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        alert('Xato: Noto‘g‘ri amal!');
        clearScreen();
    }
}

// ** Klaviatura orqali boshqarish **
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/().".includes(key)) {
        appendValue(key); // Sonlar va amallarni ekranga chiqarish
    } else if (key === "Enter") {
        calculate(); // Enter -> natija chiqarish
    } else if (key === "Backspace") {
        screen.value = screen.value.slice(0, -1); // Backspace -> oxirgi belgi o‘chirish
    } else if (key === "Escape") {
        clearScreen(); // Esc -> ekranni tozalash
    }
});
