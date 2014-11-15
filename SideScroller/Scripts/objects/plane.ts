// Plane Class
module objects {
    export class Plane extends objects.GameObject {
        constructor(game: createjs.Container) {
            super("plane", game);
            this.y = 430;

            this.game.addChild(this);
        }

        update() {
            this.y = 477;
            this.x = stage.mouseX;
        }
    }
}