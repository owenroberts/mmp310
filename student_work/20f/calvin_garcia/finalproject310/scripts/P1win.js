class P1Win extends MapScene{
	constructor(){
		super()

	}

	draw(){

		textSize(30);
		fill('white');
		text("Player 1 Wins", width/2  , height/2);
		text(" Press G to Go Again", width/ 2 - 70, height/2 + 20);


		if(keyIsDown(71)){
			currentScene = 'main';
		}
	}

}