class MapScene {
constructor(){
}


		draw(){
			background(150);

			image(map,width/2,height/2);

			enemy.draw();
			player.draw();


//player lives
		for(let i = 0; i < player.lives; i++){
		let x = 20 + i * 30;
		fill('white');
		text("player 1" , 10, 20);
		textSize(20);
		ellipse(x, 40, 20);
	}

//enemy lives
		for(let i = 0; i < enemy.lives; i++){
		fill('red');
		let x = 490 + i * 30;
		ellipse(x, 40, 20);
		textSize(20);
		text("hammer" , 530, 20);
	}



//win condition
	if(enemy.lives < 1 && player.lives >0){
		textSize(20);
		fill('white')
		text("Player 1 Wins", width/2 - 50 , height/2);
		text(" Press G to Go Again", width/ 2 - 70, height/2 + 20);
		// currentScene = 'p1win';
	}





//lose condition	

	if(player.lives < 1 && enemy.lives > 0){
		textSize(20);
		fill('white');
		text("Player 2 Wins ", width/2 - 50 , height/2);
		text(" Press G to Go Again", width/ 2 - 70, height/2 + 20);

	}

	if(player.collide(enemy) && player.isAttacking){
	enemy.lives-=1;
}

	if(enemy.collide(player)&& enemy.isAttacking) {
		player.lives--; 
	}

	}
}
	









	
	
		
