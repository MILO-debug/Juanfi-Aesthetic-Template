const popupBanner = document.getElementById('popup-banner');
const popupTitle = document.getElementById('popup-title');
const insertCoinBtn = document.getElementById('insert-coin-btn');
const closePopup = document.getElementById('close-popup');
const images = ['logo1.png', 'logo2.png', 'logo3.png'];
let index = 0;
const slideElement = document.getElementById('slide');

function changeImage() {
    slideElement.src = images[index];
    index = (index + 1) % images.length; // Loop back to the first image
}

setInterval(changeImage, 5000); // Change image every 5 seconds

document.addEventListener('DOMContentLoaded', function () {
    const insertCoinButton = document.querySelector('.insert-coin');
    const myPointsButton = document.querySelector('.my-points');
    const promoRatesButton = document.querySelector('.promo-rates');
    const popupBanner = document.getElementById('popup-banner');
    const popupTitle = document.getElementById('popup-title');
    const closePopupButton = document.getElementById('close-popup');

    insertCoinButton.addEventListener('click', function () {
        popupTitle.textContent = 'Insert Coin';
        showPopup();
    });

    myPointsButton.addEventListener('click', function () {
        popupTitle.textContent = 'My Points';
        showPopup();
    });

    promoRatesButton.addEventListener('click', function () {
        popupTitle.textContent = 'Promo Rates';
        showPopup();
    });

    closePopupButton.addEventListener('click', function () {
        hidePopup();
    });

    function showPopup() {
        popupBanner.style.display = 'block'; // Ensure the popup is visible
        setTimeout(() => {
            popupBanner.classList.remove('hide');
            popupBanner.classList.add('show');
        }, 10); // Delay to allow display to take effect
    }

    function hidePopup() {
        popupBanner.classList.remove('show');
        popupBanner.classList.add('hide');
        setTimeout(() => {
            popupBanner.style.display = 'none'; // Hide after the animation
        }, 500); // Match this time to the CSS transition duration
    }
});

let countdownInterval;

insertCoinBtn.addEventListener('click', () => {
    popupTitle.textContent = 'Insert Coin';
    showPopup();
});

closePopup.addEventListener('click', hidePopup);

function showPopup() {
    popupBanner.style.display = 'block'; // Ensure the popup is visible
    setTimeout(() => {
        popupBanner.classList.remove('hide');
        popupBanner.classList.add('show');
    }, 10); // Delay to allow display to take effect

    // Show specific content
    if (popupTitle.textContent === 'Insert Coin') {
        document.getElementById('insert-coin-content').style.display = 'block';
        startCountdown(60); // Start a 60-second countdown
    }
}

function startCountdown(seconds) {
    let timeLeft = seconds;
    const progressBar = document.getElementById('progress');
    const coinValue = document.getElementById('coin-value');
    const timeValue = document.getElementById('time-value');
    const codeDisplay = document.getElementById('code-display');

    countdownInterval = setInterval(() => {
        timeLeft--;
        const progressPercentage = (timeLeft / seconds) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        // Update the time value
        const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
        const secondsLeft = String(timeLeft % 60).padStart(2, '0');
        timeValue.textContent = `${hours}:${minutes}:${secondsLeft}`;

        // Stop the countdown when it reaches zero
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            codeDisplay.textContent = 'TIME UP!'; // Show a message or handle it as needed
            // Optionally, you can reset values or trigger other actions here
        }
    }, 1000); // Update every second
}

function hidePopup() {
    clearInterval(countdownInterval); // Stop the countdown if the popup is closed
    popupBanner.classList.remove('show');
    popupBanner.classList.add('hide');
    setTimeout(() => {
        popupBanner.style.display = 'none'; // Hide after the animation
    }, 500); // Match this time to the CSS transition duration

    // Reset the content for the next time the popup is shown
    document.getElementById('insert-coin-content').style.display = 'none';
    document.getElementById('progress').style.width = '100%'; // Reset progress bar
    document.getElementById('coin-value').textContent = '0.00 PHP'; // Reset coin value
    document.getElementById('time-value').textContent = '00:00:00'; // Reset time value
    document.getElementById('code-display').textContent = '______'; // Reset code display
}
