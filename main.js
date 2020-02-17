AM.queueDownload("./img/background/background_1.png");
AM.queueDownload("./img/background/background_2.png");
AM.queueDownload("./img/background/background_3.png");
AM.queueDownload("./img/ninja/ninjaRight.png");
AM.queueDownload("./img/ninja/ninjaIdle.png");
AM.queueDownload("./img/ninja/ninjaLeft.png");
AM.queueDownload("./img/explosion/banLeft.png");
AM.queueDownload("./img/explosion/banRight.png");
AM.queueDownload("./img/rocket/projectile1.png");
AM.queueDownload("./img/explosion/explosion.png");
AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");
    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();	
	var ground = new Terrain(gameEngine);
	ground.coordinates = ground.generate(50, 500, 50);	
	gameEngine.addEntity(new Background(gameEngine));
	gameEngine.addEntity(ground);
	gameEngine.addEntity(new ninja(gameEngine));
	gameEngine.addEntity(new ban(gameEngine, ground));

});