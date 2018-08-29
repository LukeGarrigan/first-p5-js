
var player;
var food = [];
var foodCount = 50;
let socket;
let otherPlayer;
function setup() {
  createCanvas(400, 400);
  player = new Player();
  socket = io.connect("http://localhost:3000");

  for (var i = 0; i < foodCount; i++) {
    food.push(new Food());
  }
  socket.on('player', newDrawing);
}

function newDrawing(data) {
  noFill();
  stroke(255);

  otherPlayer = data;

}


function draw() {
  background(0);
  fill(255);
  player.update();
  for (var i = 0; i < food.length; i++) {
    food[i].display();
  }

  push();
  console.log("drawing other player");
  stroke(255);
  noFill();
  if (otherPlayer) {
    translate(otherPlayer.x, otherPlayer.y);
    triangle(-20, 20, 20, 20, 0, -20);
  }
  // this.radians = atan2(mouseY-this.pos.y, mouseX-this.pos.x);

  // rotate(this.radians + HALF_PI);
  pop();




  let data = {
    x: player.pos.x,
    y: player.pos.y
  }

  socket.emit('player', data);
}


function keyPressed() {
  if (keyCode == UP_ARROW) {
    player.up();
  }

  if (keyCode == LEFT_ARROW) {
    player.left();
  }
}

function keyReleased() {
  if (keyCode == LEFT_ARROW) {
    player.releaseLeft();
  }
  if (keyCode == UP_ARROW) {
    player.releaseUp();
  }
}
