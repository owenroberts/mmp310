/* 
	final_project

*/ 
/*characters var */
var shinMask, shinRotation, shinRotationLeft, shinUp, shinDown;
var noiMask, kaimanMask, nikaidoMask;

var startGameTab;


var portals = [];

var mushOne, mushTwo, mushThree;

var gyozaImage; 
var hammerImage;

var player;
var main;
var level = 1;
var score = 0;
var display;
var scenes = {};
var currentScene;
var currentCharacter; 
var character = [];
var img;




function preload() {
	shinMask = loadImage("images/shin_mask.gif");
	shinName = loadImage("images/shin_name.png");

	noiMask = loadImage("images/noi_mask.gif");
	noiName = loadImage("images/noi_name.png");

	kaimanMask = loadImage("images/kaiman_face.gif");
	kaimanName = loadImage("images/kaiman_name.png");

	nikaidoMask = loadImage("images/nikaido_mask.gif");
	nikaidoName = loadImage("images/nikaido_name.png");

	hospital = loadImage("images/hole_central_hospital.png");
	hospitalInside = loadImage("images/hospital_intern.png");

	market = loadImage("images/holemarket.png");
	marketInside = loadImage("images/central_intern.png");

	tavern = loadImage("images/hungry_bug.png");
	tavernInside = loadImage("images/tavern_inside.png");

	enMansion = loadImage("images/en_mainson.png");
	enMansionInside = loadImage("images/en_maison_interior.png");	

	trainingSchool = loadImage("images/training_school.png");
	trainingSchoolInside = loadImage("images/school_interior.png");	

	turkeyHouse = loadImage("images/turkey_house_outside.png");
	turkeyHouseInside = loadImage("images/turkey_house.png");	

	startGameTab = loadImage("images/start_game_tab.gif");
	youLost = loadImage("images/you_lost.gif");
	youWon = loadImage("images/you_win.gif");
	magicWorldType = loadImage("images/magic_world.png");
	holeWorldType = loadImage("images/hole_world.png");
	dorohedoroTitle = loadImage("images/dorohedoro_title.png");

	mushOne = loadImage("images/mushroomone.gif");
	mushTwo = loadImage("images/mushroomtwo_reverse.gif");
	mushThree = loadImage("images/mushroomthree.gif");

	rain = loadImage("images/rain.gif");
	light = loadImage("images/lighting.png");
	trash_bin = loadImage("images/trashbin.png");

	treeImage = loadImage("images/treee.png");
	fenceImage = loadImage("images/fence.png");
	grassImage = loadImage("images/grass.png");
	
	gyozaImage = loadImage("images/gyoza.png");

	
	heartLives = loadImage("images/heart_lives.png");
}


function setup() {
	createCanvas(1630, 400);
	textFont('Roboto Mono');

	main = new EntryScene(); 


	tavernScene = new TavernScene(tavernInside, 4, 7)

	hospitalScene = new HospitalScene(hospitalInside, 8, 12);


	marketScene = new MarketScene(marketInside, 13, 16);


	schoolScene = new SchoolScene(trainingSchoolInside, 4, 7);


	turkeyHouseScene = new TurkeyHouseScene(turkeyHouseInside, 8, 12);

	enScene = new EnScene(enMansionInside, 13, 16);

	holeScene = new HoleScene();
	magicScene  = new MagicScene();

	loseScene = new LoseScene();
	winScene = new WinScene();


	characters = new CharactersScene();


 	player = new Player(width / 2, height / 2);

 	display = new Display();

 	currentScene = main;
 	currentScene.setup();



}

function changeScene(sceneName) {
    currentScene = sceneName;
    if (currentScene.setup) {
        currentScene.setup();
    }
}

function mousePressed() {
	currentScene.mousePressed();
}

function draw() {
	currentScene.draw();


	// player keyboard //

	player.isWalking = false

	if (keyIsDown(RIGHT_ARROW)) {
		player.x += player.speed;
		player.isWalking = true;

	} else if (keyIsDown(LEFT_ARROW)) {
		player.x -= player.speed;
		player.isWalking = true;

	} else if (keyIsDown(UP_ARROW)) {
		player.y -= player.speed;
		player.isWalking = true;

	} else if (keyIsDown(DOWN_ARROW)) {
		player.y += player.speed;
		player.isWalking = true;
	}


	display.draw();

}
