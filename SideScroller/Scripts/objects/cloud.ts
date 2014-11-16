module objects {
    // Cloud Class
    export class Cloud extends objects.GameObject {
        dy: number;
        dx: number;
        constructor(game:createjs.Container) {
            super("asteroid", game);
            this.game.addChild(this);
            this.reset();
        }

        reset() {
            this.y = Math.floor((Math.random()) * stage.canvas.height);
            this.x = 1200;
            this.dx = Math.floor(Math.random() * 10 + 2);
        }

        update() {
            //this.y += this.dy;
            this.x -= this.dx;
            if (this.x < (-50) || this.y > (495)) {
                this.reset();
            }

        }
    }
} 