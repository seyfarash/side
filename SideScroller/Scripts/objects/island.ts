module objects {
    // Island Class
    export class Island extends objects.GameObject {
        dy: number;
        dx: number;

        constructor(game: createjs.Container) {
            super("fuel", game);
            this.dx = 5;
            this.game.addChild(this);
            this.reset();
        }

        //Use to reset position of fuel can
        reset() {
            this.x = ((Math.random()* 900) + 700);
            this.y = Math.floor(Math.random() * stage.canvas.height);
        }

        //Updates fuel position
        update() {
            this.x -= this.dx;
            if (this.x < (-50)) {
                this.reset();
            }

        }
    }
} 