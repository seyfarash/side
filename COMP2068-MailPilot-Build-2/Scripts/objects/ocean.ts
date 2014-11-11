﻿module objects {
    // Ocean Class
    export class Ocean extends createjs.Bitmap {
        width: number;
        height: number;
        game: createjs.Container;
        dx: number;
        constructor(game: createjs.Container) {
            super(managers.Asset.loader.getResult("ocean"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.game = game;
            this.dx = 2;
            this.game.addChild(this);
            this.game.addChild(this);
            this.reset();
        }

        reset() {
            this.x = -50;
        }

        update() {
            this.x -= this.dx;
            if (this.x < -755) {
                this.reset();
            }

        }
    }
} 