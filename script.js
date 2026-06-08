// Birthday Countdown (June 13, 2026)
function updateBirthdayCountdown() {
    const birthday = new Date('2026-06-13').getTime();
    const now = new Date().getTime();
    const difference = birthday - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    } else {
        document.getElementById('birthdayCountdown').innerHTML = '<p style="font-size: 1.5em; color: #667eea;">🎉 Happy Birthday! 🎉</p>';
    }
}

// Anniversary Countdown (December 2, 2026)
function updateAnniversaryCountdown() {
    const anniversary = new Date('2026-12-02').getTime();
    const now = new Date().getTime();
    const difference = anniversary - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('annDays').textContent = days;
        document.getElementById('annHours').textContent = hours;
        document.getElementById('annMinutes').textContent = minutes;
        document.getElementById('annSeconds').textContent = seconds;
    } else {
        document.getElementById('anniversaryCountdown').innerHTML = '<p style="font-size: 1.5em; color: #667eea;">💕 Happy Anniversary! 💕</p>';
    }
}

// Update countdowns every second
setInterval(updateBirthdayCountdown, 1000);
setInterval(updateAnniversaryCountdown, 1000);
updateBirthdayCountdown();
updateAnniversaryCountdown();

// Mini Game - Heart Clicker
let score = 0;
let combo = 0;
let comboTimeout;

const heartButton = document.getElementById('heartButton');
const scoreDisplay = document.getElementById('score');
const comboDisplay = document.getElementById('combo');

heartButton.addEventListener('click', () => {
    score++;
    combo++;
    
    scoreDisplay.textContent = score;
    comboDisplay.textContent = combo;
    
    // Clear combo timeout
    clearTimeout(comboTimeout);
    
    // Reset combo after 2 seconds of no clicks
    comboTimeout = setTimeout(() => {
        combo = 0;
        comboDisplay.textContent = combo;
    }, 2000);
    
    // Add a fun pop-up effect
    createPopup();
    
    // Button animation
    heartButton.style.transform = 'scale(1.2)';
    setTimeout(() => {
        heartButton.style.transform = 'scale(1)';
    }, 100);
});

function createPopup() {
    const popup = document.createElement('div');
    popup.textContent = '+1';
    popup.style.position = 'fixed';
    popup.style.left = event.clientX + 'px';
    popup.style.top = event.clientY + 'px';
    popup.style.color = '#667eea';
    popup.style.fontSize = '1.5em';
    popup.style.fontWeight = 'bold';
    popup.style.pointerEvents = 'none';
    popup.style.zIndex = '999';
    
    document.body.appendChild(popup);
    
    // Animate popup
    let top = event.clientY;
    const interval = setInterval(() => {
        top -= 5;
        popup.style.top = top + 'px';
        popup.style.opacity = 1 - (event.clientY - top) / 50;
        
        if (event.clientY - top > 50) {
            clearInterval(interval);
            popup.remove();
        }
    }, 30);
}
