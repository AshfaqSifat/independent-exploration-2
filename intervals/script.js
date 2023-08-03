// number of seconds that have passed
let time = 0;
setInterval(update, 1000);
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

function update() {
    time++
    counterElement.innerHTML = time;
}