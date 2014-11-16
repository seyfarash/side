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
        var mailPilotText, instr;
        var play, instruction;

        game = new createjs.Container();

        ocean = new objects.Ocean(game);

        plane = new objects.Plane(game);

        //Game name and Title
        mailPilotText = new createjs.Text("Space Ace", constants.GAME_FONT, constants.FONT_COLOUR);
        mailPilotText.regX = mailPilotText.getBounds().width * 0.5;
        mailPilotText.regY = 200;
        mailPilotText.x = stage.canvas.width * 0.5;
        mailPilotText.y = stage.canvas.height * 0.5;
        game.addChild(mailPilotText);

        //Play Button
        play = new createjs.Bitmap("assets/images/play.png");
        play.regX = play.getBounds().width * 0.5;
        play.regY = 100;
        play.x = stage.canvas.width * 0.5;
        play.y = stage.canvas.height * 0.5;
        game.addChild(play);

        //Instructions Button
        instruction = new createjs.Bitmap("assets/images/instruction.png");
        instruction.regX = instruction.getBounds().width * 0.5;
        instruction.regY = -30;
        instruction.x = stage.canvas.width * 0.5;
        instruction.y = stage.canvas.height * 0.5;
        game.addChild(instruction);

        //Click event listeners for two buttons below
        play.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY_STATE;
            changeState(currentState);
        });

        instruction.addEventListener("click", function (e) {
            instr = new createjs.Text("Avoid asteroids, collect fuel!", constants.GAME_FONT, constants.FONT_COLOUR);
            instr.regX = instr.getBounds().width * 0.5;
            instr.regY = -100;
            instr.x = stage.canvas.width * 0.5;
            instr.y = stage.canvas.height * 0.5;
            game.addChild(instr);
        });

        stage.addChild(game);
    }
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map
