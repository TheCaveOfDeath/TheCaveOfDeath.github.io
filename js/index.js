var imgs = {};
var level = 0;
var game, player;
var collisionboxes = [];
var prevframexy = {};
var devmode = true;

function preload() {
    imgs.aboveground = loadImage("img/aboveground.png");
    imgs.player = loadImage("img/panda.png");
}

function setup() {
    game = new Game(1950, 2130);
    player = new Player(500, 350);
    createCanvas(1000, 700);
    collisionboxes.push(new CollisionBox(2020, 1280, 25, 1520, "rect")); // left fence
    collisionboxes.push(new CollisionBox(2045, 1280, 811, 25, "rect")); // top fence
    collisionboxes.push(new CollisionBox(2858, 1280, 25, 1520, "rect")); // right fence
    collisionboxes.push(new CollisionBox(2173, 1466, 20, 439, "rect")); // left wall
    collisionboxes.push(new CollisionBox(2193, 1845, 86, 60, "rect")); // left door wall
    collisionboxes.push(new CollisionBox(2373, 1845, 76, 60, "rect")); // right door wall
    collisionboxes.push(new CollisionBox(2449, 1466, 20, 439, "rect")); // right wall
    collisionboxes.push(new CollisionBox(2195, 1466, 253, 60, "rect")); // top wall
    collisionboxes.push(new CollisionBox(2031, 1810, 65, 40, "rect")); // tree
    collisionboxes.push(new CollisionBox(2031, 2440, 65, 40, "rect")); // tree
    collisionboxes.push(new CollisionBox(2614, 2255, 65, 40, "rect")); // tree
    collisionboxes.push(new CollisionBox(2290, 1357, 65, 40, "rect")); // tree
    collisionboxes.push(new CollisionBox(2645, 2120, 130, 40, "rect")); // rocks
    collisionboxes.push(new CollisionBox(2773, 1993, 60, 40, "rect")); // rock
}

function draw() {

    game.getXY();
    imageMode(CORNER)
    image(imgs.aboveground, -1 * game.x, -1 * game.y, 4000, 2800);
    if (devmode) {
        for (var cb of collisionboxes) {
            cb.draw();
        }
    }
    prevframexy = { "gx": game.x, "gy": game.y, "px": player.x, "py": player.y };
    player.movingUD = false;
    player.movingLR = false;
    if (register[87]) {
        game.move("y", -5);
        player.movingUD = true;
    }
    if (register[83]) {
        game.move("y", 5);
        player.movingUD = true;
    }
    if (register[65]) {
        game.move("x", -5);
        player.movingLR = true;
    }
    if (register[68]) {
        game.move("x", 5);
        player.movingLR = true;
    }
    player.draw();
    if (devmode) {
        strokeWeight(1);
        stroke("black");
        text("x: " + (mouseX + game.x) + ", y: " + (mouseY + game.y) + " Frame Rate: " + Math.round(frameRate()), mouseX, mouseY);
    }
}

var register = {};

function keyPressed() {
    register[keyCode] = true;

}

function keyReleased() { register[keyCode] = false; }
window.addEventListener("keydown", function(e) { if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) { e.preventDefault(); } }, false);