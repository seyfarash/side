var managers;
(function (managers) {
    var Asset = (function () {
        function Asset() {
        }
        Asset.init = function () {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(this.manifest);

            this.atlas = new createjs.SpriteSheet(this.spriteSheetData);
        };
        Asset.spriteSheetData = {
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
                "island": [1],
                "plane": {
                    frames: [2, 3, 4],
                    speed: 1
                }
            }
        };

        Asset.manifest = [
            { id: "ocean", src: "assets/images/ocean.png" },
            { id: "yay", src: "assets/sounds/Fuel.wav" },
            { id: "bg", src: "assets/sounds/bg.mp3" },
            { id: "lose", src: "assets/sounds/lose.mp3" },
            { id: "thunder", src: "assets/sounds/explosion.wav" },
            { id: "play", src: "assets/images/play.png" },
            { id: "try", src: "assets/images/try.png" },
            { id: "instruction", src: "assets/images/instruction.png" }
        ];
        return Asset;
    })();
    managers.Asset = Asset;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map
