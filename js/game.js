class Game {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getXY() {
        this.rightx = this.x + 1000;
        this.boty = this.y + 700;
        if (this.rightx > 4000) {
            this.x = 3000;
            this.rightx = 4000;
        }
        if (this.boty > 2800) {
            this.boty = 2800;
            this.y = 2100;
        }
    }
    move(xy, value) {
        if (xy == "x") {
            if (checkPlaceFree(player.x + value, player.y - player.h / 3)) {
                if (game.rightx <= 4000 && game.x >= 0 && player.x == 500) {
                    game.x += value;
                }
                if (game.rightx > 3990 && player.x < 900) {
                    if (value > 0) {
                        player.x += value;
                    }
                }
                if (game.x < 10 && player.x > 100) {
                    if (value < 0) {
                        player.x += value;
                    }
                }
                if (player.x > 500) {
                    if (value < 0) {
                        if (player.x + value > 500) {
                            player.x += value;
                        } else {
                            player.x = 500;
                        }
                    }
                }
                if (player.x < 500) {
                    if (value > 0) {
                        if (player.x + value < 500) {
                            player.x += value;
                        } else {
                            player.x = 500;
                        }
                    }
                }
            }
        }
        if (xy == "y") {
            if (checkPlaceFree(player.x, player.y - player.h / 3 + value)) {
                if (game.boty <= 2800 && game.y >= 0 && player.y == 350) {
                    game.y += value;
                }
                if (game.boty > 2790 && player.y < 600) {
                    if (value > 0) {
                        player.y += value;
                    }
                }
                if (game.y < 10 && player.y > 100) {
                    if (value < 0) {
                        player.y += value;
                    }
                }
                if (player.y > 350) {
                    if (value < 0) {
                        if (player.y + value > 350) {
                            player.y += value;
                        } else {
                            player.y = 350;
                        }
                    }
                }
                if (player.y < 350) {
                    if (value > 0) {
                        if (player.y + value < 350) {
                            player.y += value;
                        } else {
                            player.y = 350;
                        }
                    }
                }
            }
        }
    }
}

function checkPlaceFree(x, y) {
    for (var cb of collisionboxes) {
        if (cb.checkCollision(x, y, player.w, player.h)) {
            return false;
        }
    }
    return true;
}