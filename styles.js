var countDisplay = document.querySelector(".count h1");
var counterBox = document.querySelector(".counter");
var car = document.querySelector(".moveing");
var redLight = document.querySelector(".red");
var yellowLight = document.querySelector(".yellow");
var greenLight = document.querySelector(".green");

var countdown;
var moveInterval;
var position = 0;

function resetLights() {
    redLight.classList.remove("active");
    yellowLight.classList.remove("active");
    greenLight.classList.remove("active");
}

function startCountdown() {
    var count = 3;
    countDisplay.textContent = count;
    counterBox.classList.remove("hidden");
    resetLights();
    yellowLight.classList.add("active");

    countdown = setInterval(function () {
        count--;
        countDisplay.textContent = count;

        if (count <= 0) {
            clearInterval(countdown);
            counterBox.classList.add("hidden");
            startMovingCar();
        }
    }, 1000);
}

function startMovingCar() {
    resetLights();
    greenLight.classList.add("active");

    moveInterval = setInterval(function () {
        var screenWidth = window.innerWidth;
        var carWidth = car.offsetWidth;

        // if (position >= screenWidth) {
        //     position = -carWidth; // Reset to start position
        // }
        position += 4;
        car.style.left = position + "px";
    }, 20);
}

function stopCar() {
    clearInterval(countdown);
    clearInterval(moveInterval);
    resetLights();
    redLight.classList.add("active");
}

function startPressed() {
    position = 0;
    car.style.left = "0px";
    stopCar(); // Stop any current action
    startCountdown();
}

function stopPressed() {
    stopCar();
}
