module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        
         private _dice1:createjs.Bitmap;
         private _dice2:createjs.Bitmap;
         private _background: createjs.Bitmap;
         private _welcomeLabel: objects.Label;
         private _dice1Label: objects.Label;
         private _dice2Label: objects.Label;
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
             this._welcomeLabel = new objects.Label("Click the Rool Button to Rool the Dice", "30px", "Consolas", "#fff", 320, 50, true);

             //Adding dice lable to display dice value 
             this._dice1Label = new objects.Label("0", "20px", "Consolas", "#fff", 250, 270, false);
             this._dice2Label = new objects.Label("0", "20px", "Consolas", "#fff", 400, 270, false);
             
             // buttons
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            
           
            
             this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {

            this._dice1 = new createjs.Bitmap(config.Game.ASSETS.getResult("dice1"));
            this._dice1.scaleX = 0.5;
            this._dice1.scaleY= 0.5;
            this._dice1.x=200;
            this._dice1.y=150;

            this._dice2 = new createjs.Bitmap(config.Game.ASSETS.getResult("dice1"));
            this._dice2.scaleX = 0.5;
            this._dice2.scaleY= 0.5;
            this._dice2.x=350;
            this._dice2.y=150;

           
            this.addChild(this._background);
           // this.addChild(this._background);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._dice1);
            this.addChild(this._dice2);
            this.addChild(this._dice1Label);
            this.addChild(this._dice2Label);

            

            this._startButton.on("click", ()=>{
               // config.Game.SCENE = scenes.State.PLAY;
               
               let dice1= Math.floor(Math.random() * 6) +1;
               let dice2= Math.floor(Math.random() * 6) +1;
               //console.log(dice1 +" " +dice2)
               this.removeChild(this._dice1);
               this.removeChild(this._dice2);
               
              this._dice1 = new createjs.Bitmap(config.Game.ASSETS.getResult("dice"+dice1));
                this._dice1.scaleX = 0.5;
                this._dice1.scaleY= 0.5;
                this._dice1.x=200;
                this._dice1.y=150;

              this._dice2 = new createjs.Bitmap(config.Game.ASSETS.getResult("dice"+dice2));
                this._dice2.scaleX = 0.5;
                this._dice2.scaleY= 0.5;
                this._dice2.x=350;
                this._dice2.y=150;
              this.addChild(this._dice1);
              this.addChild(this._dice2);

              this._dice2Label.text=""+dice2;
              this._dice1Label.text=""+dice1;


            });
            
            
        }

        
    }
}