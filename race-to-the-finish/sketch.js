let redXPos = 25;
let redYPos = 100;
let blueXPos = 25;
let blueYPos = 200;
let redScore = 0;
let blueScore = 0;


function setup() {
    createCanvas(800, 300);
    rectMode(CENTER);
    strokeWeight(3);
}

function draw() {
    background(0, 200, 0);

    // move both balls random distances
    redXPos += random(-1, 5);
    redYPos += random(-0.5, 0.5);
    blueXPos += random(-1, 5);
    blueYPos += random(-0.5, 0.5);

    // show scores
    textSize(60);
    fill(255, 0, 0);
    text(redScore, 650, 100);
    fill(0, 0, 255);
    text(blueScore, 650, 225);

    // show finish line
    line(600, 0, 600, 300);

    // red ball
    fill(255, 0, 0);
    ellipse(redXPos, redYPos, 50, 50);
    
    // blue ball
    fill(0, 0, 255);
    ellipse(blueXPos, blueYPos, 50, 50);

    // crossed finish line
    if (redXPos > 575 || blueXPos > 575) {
        if (redXPos > blueXPos) {
            redScore += 1;
        } else if (blueXPos > redXPos) {
            blueScore += 1;
        }
        // just for fun (so i can see how close the race was)
        console.log(Math.floor(redXPos-blueXPos));
        // reset positions
        redXPos = 25;
        redYPos = 100;
        blueXPos = 25;
        blueYPos = 200;
    }
}