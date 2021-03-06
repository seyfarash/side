﻿module managers {

    export class Asset{

        static loader;
        static atlas: createjs.SpriteSheet;

        static spriteSheetData = {
            "images": ["assets/images/atlas.png"],
            "frames": [

                [2, 2, 226, 178],
                [297, 69, 62, 63],
                [230, 2, 65, 65],
                [297, 2, 65, 65],
                [230, 69, 65, 65]
            ],
            "animations": {

                "asteroid": [0],
                "fuel": [1],
                "plane": {
                    frames: [2, 3, 4],
                    speed: 1
            },

            }

        }

        //import assets
        static manifest = [
            { id: "ocean", src: "assets/images/space.png" },
            { id: "yay", src: "assets/sounds/Fuel.wav" },
            { id: "bg", src: "assets/sounds/bg.mp3" },
            { id: "lose", src: "assets/sounds/lose.mp3" },
            { id: "explosion", src: "assets/sounds/explosion.wav" },
            { id: "play", src: "assets/images/play.png" },
            { id: "try", src: "assets/images/try.png" },
            { id: "instruction", src: "assets/images/instruction.png" }
        ];

        static init() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);   
            this.loader.loadManifest(this.manifest);

            this.atlas = new createjs.SpriteSheet(this.spriteSheetData);

        }

   
    }
} 