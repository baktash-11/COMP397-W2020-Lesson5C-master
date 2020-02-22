module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
         private _background: createjs.Bitmap;
         private _welcomeLabel: objects.Label;
         private _startButton: objects.Button;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
            //adding background to play scene
            this._background = new createjs.Bitmap("./Assets/images/bg.jpg");
            
             //instantiate a new Text object
             this._welcomeLabel = new objects.Label("Welcome to play sceen", "40px", "Consolas", "#000000", 320, 180, true);
             // buttons
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
 

            
             this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {

           
            this.addChild(this._background);
           // this.addChild(this._background);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);

            this._startButton.on("click", ()=>{
               // config.Game.SCENE = scenes.State.PLAY;
               this._welcomeLabel.text="lets play"
            });


        }

        
    }
}