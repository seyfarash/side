module objects {
    // Island Class
    export class Island extends objects.GameObject {
        dy: number;
        dx: number;

        constructor(game: createjs.Container) {
            super("island", game);
            this.dx = 5;
            this.game.addChild(this);
            this.reset();
        }

        reset() {
            this.x = ((Math.random()* 900) + 700);
            this.y = Math.floor(Math.random() * stage.canvas.height);
        }

        update() {
            this.x -= this.dx;
            if (this.x < (-50)) {
                this.reset();
            }

        }
    }
} 