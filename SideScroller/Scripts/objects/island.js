var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Island Class
    var Island = (function (_super) {
        __extends(Island, _super);
        function Island(game) {
            _super.call(this, "fuel", game);
            this.dx = 5;
            this.game.addChild(this);
            this.reset();
        }
        //Use to reset position of fuel can
        Island.prototype.reset = function () {
            this.x = ((Math.random() * 900) + 700);
            this.y = Math.floor(Math.random() * stage.canvas.height);
        };

        //Updates fuel position
        Island.prototype.update = function () {
            this.x -= this.dx;
            if (this.x < (-50)) {
                this.reset();
            }
        };
        return Island;
    })(objects.GameObject);
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map
