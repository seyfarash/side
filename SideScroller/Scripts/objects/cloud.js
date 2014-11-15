﻿var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Cloud Class
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        function Cloud(game) {
            _super.call(this, "cloud", game);
            this.game.addChild(this);
            this.reset();
        }
        Cloud.prototype.reset = function () {
            this.y = Math.floor((Math.random()) * stage.canvas.height);
            this.x = 1200;
            this.dy = Math.floor(Math.random() * 1 + 5);
            this.dx = Math.floor(Math.random() * 10 - 2);
        };

        Cloud.prototype.update = function () {
            //this.y += this.dy;
            this.x -= this.dx;
            if (this.x < (-50) || this.y > (495)) {
                this.reset();
            }
        };
        return Cloud;
    })(objects.GameObject);
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map
