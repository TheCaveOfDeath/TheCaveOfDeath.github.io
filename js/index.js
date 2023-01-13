// Global Variables
var sprites = {};
var game, player;
var collisionboxes = [];

// Setup
game = new Game(1950, 2130);
player = new Player(500, 350);
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

// Pixi Setup
let app = new PIXI.Application({ width: 1000, height: 700 });
document.body.appendChild(app.view);

// Above Ground Sprite
sprites.aboveground = PIXI.Sprite.from('img/aboveground.png');
sprites.aboveground.width = 4000;
sprites.aboveground.height = 2800;
app.stage.addChild(sprites.aboveground);


// Player Sprite

sprites.player = PIXI.Sprite.from("img/panda.png");
sprites.player.width = 70;
sprites.player.height = 100;
sprites.player.x = player.x;
sprites.player.y = player.y;
app.stage.addChild(sprites.player);

// Draw Loop
app.ticker.add(() => {
    game.getXY();
    sprites.aboveground.x = -game.x;
    sprites.aboveground.y = -game.y;
    sprites.player.x = player.x;
    sprites.player.y = player.y;
    if (register.w) {
        console.log("TEST");
        game.move("y", -5);
    }
    if (register.s) {
        game.move("y", 5);
    }
    if (register.a) {
        game.move("x", -5);
    }
    if (register.d) {
        game.move("x", 5);
    }
});


var register = {};

document.addEventListener("keydown", function(keyCode) {
    register[keyCode.key] = true;
})
document.addEventListener("keyup", function(keyCode) {
    register[keyCode.key] = false;
})

window.addEventListener("keydown", function(e) { if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) { e.preventDefault(); } }, false);