"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            //adding background to play scene
            this._background = new createjs.Bitmap("./Assets/images/bg.jpg");
            //instantiate a new Text object
            this._welcomeLabel = new objects.Label("Click the Rool Button to Rool the Dice", "30px", "Consolas", "#fff", 320, 50, true);
            //Adding dice lable to display dice value 
            this._dice1Label = new objects.Label("0", "20px", "Consolas", "#fff", 250, 270, false);
            this._dice2Label = new objects.Label("0", "20px", "Consolas", "#fff", 400, 270, false);
            // buttons
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Main = function () {
            var _this = this;
            this._dice1 = new createjs.Bitmap(config.Game.ASSETS.getResult("dice1"));
            this._dice1.scaleX = 0.5;
            this._dice1.scaleY = 0.5;
            this._dice1.x = 200;
            this._dice1.y = 150;
            this._dice2 = new createjs.Bitmap(config.Game.ASSETS.getResult("dice1"));
            this._dice2.scaleX = 0.5;
            this._dice2.scaleY = 0.5;
            this._dice2.x = 350;
            this._dice2.y = 150;
            this.addChild(this._background);
            // this.addChild(this._background);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._dice1);
            this.addChild(this._dice2);
            this.addChild(this._dice1Label);
            this.addChild(this._dice2Label);
            this._startButton.on("click", function () {
                // config.Game.SCENE = scenes.State.PLAY;
                var dice1 = Math.floor(Math.random() * 6) + 1;
                var dice2 = Math.floor(Math.random() * 6) + 1;
                //console.log(dice1 +" " +dice2)
                _this.removeChild(_this._dice1);
                _this.removeChild(_this._dice2);
                _this._dice1 = new createjs.Bitmap(config.Game.ASSETS.getResult("dice" + dice1));
                _this._dice1.scaleX = 0.5;
                _this._dice1.scaleY = 0.5;
                _this._dice1.x = 200;
                _this._dice1.y = 150;
                _this._dice2 = new createjs.Bitmap(config.Game.ASSETS.getResult("dice" + dice2));
                _this._dice2.scaleX = 0.5;
                _this._dice2.scaleY = 0.5;
                _this._dice2.x = 350;
                _this._dice2.y = 150;
                _this.addChild(_this._dice1);
                _this.addChild(_this._dice2);
                _this._dice2Label.text = "" + dice2;
                _this._dice1Label.text = "" + dice1;
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map