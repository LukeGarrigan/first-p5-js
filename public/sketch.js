let circles = [];
let relationships = [];
let currentlyClicked;

let currentlyHeld;
let isHeld = false;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    for (let i = 0; i < 30; i++) {
        let circle = new Blob(random(window.innerWidth), random(window.innerHeight));
        circles.push(circle);
    }
}


function draw() {
    background(116);

    if (isHeld && currentlyHeld !== null) {
        currentlyHeld.x = mouseX;
        currentlyHeld.y = mouseY;
    }

    for (let i = 0; i < relationships.length; i++) {
        relationships[i].display();
    }

    for (let i = 0; i < circles.length; i++) {
        circles[i].display();
    }
}


function mouseClicked() {

    console.log("clicked");
    for (let i = 0; i < circles.length; i++) {
        let justBeenClicked = circles[i].processBeingClicked(mouseX, mouseY, currentlyClicked, relationships);

        if (justBeenClicked !== undefined) {
            currentlyClicked = justBeenClicked;
        }
    }


}


function mousePressed() {
    console.log("held");
    isHeld = true;
    for (let i = 0; i < circles.length; i++) {
        if (dist(mouseX, mouseY, circles[i].x, circles[i].y) < circles[i].r / 2) {
            currentlyHeld = circles[i];
            circles[i].x = mouseX;
            circles[i].y = mouseY;
        }
    }

}

function mouseReleased() {
    isHeld = false;
    if (currentlyHeld !== null) {
        currentlyHeld.reset();
        currentlyHeld = null;
    }

}


