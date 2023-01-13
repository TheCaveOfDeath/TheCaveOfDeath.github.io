class CollisionBox {
    constructor(x, y, w, h, type) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.type = type;
        this.touchingPlayer = false;
    }

    checkCollision(x, y, w, h) {
        if (x + w > this.x - game.x && x < this.x - game.x + this.w && y + h + 5 > this.y - game.y - h / 3 && y + h < this.y - game.y + this.h + 5) {
            return true;

        } else {
            return false;
        }

    }
}