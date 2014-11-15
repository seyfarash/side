/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
var states;
(function (states) {
    function menuState() {
        ocean.update();
        plane.update();
    }
    states.menuState = menuState;

    function Menu() {
        var mailPilotText;
        var play;

        game = new createjs.Container();

        ocean = new objects.Ocean(game);

        plane = new objects.Plane(game);

        mailPilotText = new createjs.Text("Space Ace", constants.GAME_FONT, constants.FONT_COLOUR);
        mailPilotText.regX = mailPilotText.getBounds().width * 0.5;
        mailPilotText.regY = 200;
        mailPilotText.x = stage.canvas.width * 0.5;
        mailPilotText.y = stage.canvas.height * 0.5;
        game.addChild(mailPilotText);

        play = new createjs.Bitmap("assets/images/play.png");
        play.regX = play.getBounds().width * 0.5;
        play.regY = 100;
        play.x = stage.canvas.width * 0.5;
        play.y = stage.canvas.height * 0.5;
        game.addChild(play);

        play.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY_STATE;
            changeState(currentState);
        });

        stage.addChild(game);
    }
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map
