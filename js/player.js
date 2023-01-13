class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 100;
        this.movingLR = false;
        this.movingUD = false;
    }
    draw() {
        imageMode(CORNER);
        image(imgs.player, this.x - 10, this.y, 70, 100);
    }
}