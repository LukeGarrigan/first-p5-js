
var player;
var food = [];
var foodCount = 50;
let socket;
let otherPlayers = [];

function setup() {
  createCanvas(400, 400);
  console.log("Running setup method");
  player = new Player();
  socket = io.connect('http://codeheir.com:3000');

  for (var i = 0; i < foodCount; i++) {
    food.push(new Food());
  }
  socket.on('player', newDrawing);
}

function newDrawing(data) {
  noFill();
  stroke(255);

  let exists = false;
  for (let i = 0; i < otherPlayers.length; i ++) {
    if (otherPlayers[i].id == data.id) {
      otherPlayers[i] = data;
      exists = true;
    }
  }

  if (!exists) {
    otherPlayers.push(data);
  }

}


function draw() {
  background(0);
  fill(255);
  player.update();
  for (var i = 0; i < food.length; i++) {
    food[i].display();
  }


  for (let i = 0; i < otherPlayers.length; i++) {
    push();
    stroke(255);
    noFill();
    translate(otherPlayers[i].x, otherPlayers[i].y);
    triangle(-20, 20, 20, 20, 0, -20);
    pop();
  }

  // this.radians = atan2(mouseY-this.pos.y, mouseX-this.pos.x);

  // rotate(this.radians + HALF_PI);





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
