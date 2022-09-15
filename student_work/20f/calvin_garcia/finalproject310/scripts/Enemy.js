class Enemy extends GameObject{

	constructor(x,y){
		super(enemyCharacter, x,y);
		this.character = enemyCharacter;
		this.attack = enemyAttack;
		this.walk = enemyWalk; 
		this.isWalking = false;
		this.enemyAttacking = true; 
		this.speed = 2;
		this.enemyAttackFlip = enemyAttackFlip;
		this.enemyWalkFlip = enemyFlipWalk;

		this.lives = 4;
	}


	draw(){

		this.isWalking = false;
		this.isAttacking = false;

//controls
	
	

			if(keyIsDown(RIGHT_ARROW)){
			// image(this.walk,this.x,this.y);
			this.x += this.speed;
			this.isWalking = true;

			}

			if(keyIsDown(LEFT_ARROW)){
			// image(this.walk,this.x,this.y);
			this.x -= this.speed;
			this.isWalking = true;

			}

			if(keyIsDown(UP_ARROW)){
			// image(this.walk,this.x,this.y);
			this.y -= this.speed;
			this.isWalking = true;

			}	

			if(keyIsDown(DOWN_ARROW)){
			// image(this.walk,this.x,this.y);
			this.y += this.speed;
			this.isWalking = true;		

			}

	//attack

				if(keyIsDown(80)){
					this.attackKeyWasPressed = true;
				}

				if(!keyIsDown(80) && this.attackKeyWasPressed){
					this.isAttacking = true;
					this.attackKeyWasPressed = false;
				}

	//flip attack code
	
				if(this.attackKeyWasPressed && this.x < player.x){
					image(this.enemyAttackFlip,this.x,this.y);
				}			

				else if(this.attackKeyWasPressed){
					image(this.attack,this.x,this.y);
				}
	//flip walk code
				
				 if(this.isWalking && this.x < player.x){
					image(this.enemyWalkFlip,this.x,this.y);
				}	
	//walk
				
				else if(this.isWalking){
					image(this.walk,this.x,this.y);
				}	


	//idle image
			
				else if(!this.isWalking && !this.isAttacking && !this.attackKeyWasPressed){
				image(this.character,this.x,this.y);
			}
}
		
}
		
// //old controls

// 			if(keyIsDown(68)){
// 			// image(this.walk,this.x,this.y);
// 			this.x += this.speed;
// 			this.isWalking = true;

// 			}

// 			if(keyIsDown(65)){
// 			// image(this.walk,this.x,this.y);
// 			this.x -= this.speed;
// 			this.isWalking = true;

// 			}

// 			if(keyIsDown(87)){
// 			// image(this.walk,this.x,this.y);
// 			this.y -= this.speed;
// 			this.isWalking = true;

// 			}	

// 			if(keyIsDown(83)){
// 			// image(this.walk,this.x,this.y);
// 			this.y += this.speed;
// 			this.isWalking = true;		

// 			}


// 	//attack

// 				if(keyIsDown(32)){
// 					this.isAttacking = true;
// 				}

// 				if(this.isAttacking){
// 					image(this.attack,this.x,this.y);
// 				}
// 				else if(this.isWalking){
// 					image(this.walk,this.x,this.y);
// 	//idle image
// 				}
// 				else{
// 				image(this.character,this.x,this.y);
// 			}
// }
		
		

	


