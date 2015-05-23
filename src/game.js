/**
*
* @name AmazonasMaze
* @author Jesus Vazquez Pigueiras
* @author Diego Díaz Bailón
* @author Enrique Delgado Solana
*
**/

var game = function () {
	var Q = window.Q = Quintus()
		.include("Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX, Audio")
		.enableSound()
		.setup({width: 320, height:  480})
		.controls().touch();

	/*==============================
	=          		Boat		         =
	==============================*/
	/*
	Q.animations('boat', {
		run_right: 		{ frames: [1, 2, 3], rate: 1/10 },
		run_left: 		{ frames: [15, 16, 17], rate: 1/10 },
		stand_right: 	{ frames: [0] },
		stand_left: 	{ frames: [14] },
		jump_right: 	{ frames: [4] },
		jump_left: 		{ frames: [18] },
		dead: 			{ frames: [12] }
	});*/

	Q.Sprite.extend("Boat", {
	init: function(p) {
		this._super(p, {
				//sheet: "boat",
				//sprite: "boat",
				//frame: 0,
				asset: "boat-small.png"
				//jumpSpeed: -400,
				//speed: 300

			});

			this.add('animation, tween');
	}
});


	/*==============================
	=          Background          =
	==============================*/

/*

	Q.Sprite.extend("Background",{
		init: function(p) {
			this._super(p,{
				x: Q.width/2,
				y: Q.height/2,
				asset: 'mainTitle.png'
			});
			this.on("touch",function() {
				Q.stageScene("level1");
			});
		}
	});

*/

	/*-----  End of Background   ----*/

	/*==============================
	=            Stages            =
	==============================*/

/*

	Q.scene('hud',function(stage) {
	  var container = stage.insert(new Q.UI.Container({
	    x: 50, y: 0
	  }));

	  var label = container.insert(new Q.UI.Text({x:100, y: 20,
	    label: "Coins: " + Q.state.get("coins"), color: "Black" }));

	  container.fit(20);


	  //Cuando hay un cambio de valor limpiamos la escena 1 y la volvemos a introducir
	  Q.state.on("change.coins", function() {
	  	Q.clearStage(1);
	  	Q.stageScene('hud', 1);
	  })
	});

*/

	/*-----   End of Stages   -----*/

//initial scene
	Q.scene('initGame',function(stage) {

		//Q.clearStage(1);
		var bg = new Q.Background({ type: Q.SPRITE_UI });
		stage.insert(bg);
		Q.audio.stop(); //Stop all the music

		Q.input.on("confirm",function() {
			//si estamos en la escena inicial cargamos el nivel 1
			if(Q.stage().scene.name == "initGame")
				Q.stageScene("level1");
		});


	});


//level1
	Q.scene("level1",function(stage) {
		Q.stageTMX("level1.tmx",stage);
		console.log("prueba");
		//crate elements

	 	boat = stage.insert(new Q.Boat({x:20, y:20}));

	 	//Q.state.reset({ coins: 0 });

	 	//Q.stageScene('hud', 1);

	 	//Q.audio.play('music_main.mp3', {loop: true});
/*
	 	var container = stage.insert(new Q.UI.Container({
			x: Q.width/2, y: Q.height/2, fill: "rgba(0,0,0,0)"
		}));
*/
		//var label = stage.insert(new Q.UI.Text({x: Q.width/2, y: Q.height/2, label: "Coins: " }));

	 	//stage.add("viewport").follow(mario);//.follow(Q("Player").first());

	 	//stage.viewport.offsetX = -100;
	 	//stage.viewport.offsetY = 180;
	 	//stage.add("viewport").centerOn(150, 380);
	});


//End game scene
	Q.scene('endGame',function(stage) {
		var container = stage.insert(new Q.UI.Container({
			x: Q.width/2, y: Q.height/2, fill: "rgba(0,0,0,0.5)"
		}));

		var button = container.insert(new Q.UI.Button({ x: 0, y: 0, fill: "#CCCCCC", label: "Play Again" }))
		var label = container.insert(new Q.UI.Text({x:10, y: -10 - button.p.h, label: stage.options.label }));
		button.on("click",function() {
			Q.clearStages();
			Q.stageScene('initGame');
		});

		container.fit(20);
	});



	Q.load(["boat-small.png",
						"bg.png", "tiles.png"], function() {
		//Q.compileSheets("mario_small.png","mario_small.json");
		console.log("no carga nada");
		Q.stageScene("level1");
	});

	Q.loadTMX("level1.tmx, tiles.png", function() {

	});

};
