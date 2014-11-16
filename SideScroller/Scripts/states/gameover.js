/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
var states;
(function (states) {
    function gameOverState() {
        ocean.update();
    }
    states.gameOverState = gameOverState;

    function GameOver() {
        var gameOverText;
        var ScoreText;
        var tryAgain;

        game = new createjs.Container();

        ocean = new objects.Ocean(game);

        stage.cursor = "";

        ScoreText = new createjs.Text(scoreboard.score.toString(), constants.GAME_FONT, constants.FONT_COLOUR);
        ScoreText.regX = ScoreText.getBounds().width * 0.5;
        ScoreText.regY = ScoreText.getBounds().height * 0.5;
        ScoreText.x = stage.canvas.width * 0.5;
        ScoreText.y = 180;
        game.addChild(ScoreText);

        gameOverText = new createjs.Text("Game Over", constants.GAME_FONT, constants.FONT_COLOUR);
        gameOverText.regX = gameOverText.getBounds().width * 0.5;
        gameOverText.regY = gameOverText.getBounds().height * 0.5;
        gameOverText.x = stage.canvas.width * 0.5;
        gameOverText.y = stage.canvas.height * 0.5;
        game.addChild(gameOverText);

        tryAgain = new createjs.Bitmap("assets/images/try.png");
        tryAgain.regX = tryAgain.getBounds().width * 0.5;
        tryAgain.regY = -40;
        tryAgain.x = stage.canvas.width * 0.5;
        tryAgain.y = stage.canvas.height * 0.5;
        game.addChild(tryAgain);

        gameOverText.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.MENU_STATE;
            changeState(currentState);
        });

        tryAgain.addEventListener("click", function (e) {
            stage.removeChild(game);
            createjs.Sound.stop();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.MENU_STATE;
            changeState(currentState);
        });
        stage.addChild(game);
    }
    states.GameOver = GameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map
