var currentLevel;
var pacman;
var collectibles;

//var direction1 = 270;
//var direction2 = 360;
//var direction3 = 360;
var enemies;

var directions = [90, 180, 270, 360];

var state = 0;
// 0: playing
// 1: lost (timer or ghost)
// 2: won!

var totalDots;

function setup() {
    createCanvas(1195, 725);
    var url = "data/setup.json";
    loadJSON(url, jsonLoaded);






    // console.log('setup');


    pacman = createSprite(1150, 50, 0, 0);
    //pacman.debug = true;
    pacman.addAnimation("still", "images/pacman1.png", "images/pacman2.png");



    enemies = [
        new Enemy(50, 35, "images/enemy1.png"),
        new Enemy(1150, 690, "images/enemy2.png"),
        new Enemy(50, 250, "images/enemy3.png")
    ];



    //create two groups
    obstacles = new Group();
    collectibles = new Group();

    currentLevel = 0; //start at level one


}



function Enemy(x, y, img) {
    this.s = createSprite(x, y);
    this.s.addAnimation("still", img);
    this.s.setSpeed(5, 90);
    this.s.setCollider("circle", 0, 0, 20, 20);
    this.speed = random(3, 10);
    /* this.s.debug = true;*/
}


function draw() {
    background('#222222');
    if (state == 0) {

        fill('green');
        drawSprites();

        pacman.collide(obstacles);

        for (var i = 0; i < enemies.length; i++) {
            enemies[i].s.collide(obstacles, function () {
                enemies[i].s.setSpeed(enemies[i].speed, directions[floor(random(0, directions.length))]);
            });

            enemies[i].s.collide(pacman, function () {
                //lose = true;
                state = 1;
            });
        }

        pacman.overlap(collectibles, collect);
    } else if (state == 1) {
        clearInterval(countdownTimer);
        fill("rgb(0, 121, 242)");
        textSize(50);
        text("you lost, please press any key to try again!", 150, 300);
        document.addEventListener("keydown", function () {
            window.location.reload();
        });
    } else if (state == 2) {
        clearInterval(countdownTimer);
        fill("rgb(0, 121, 242)");
        textSize(50);
        text("you won!", 400, 300);
    }



}


function jsonLoaded(data) {
    //console.log('jsonLoaded', data);
    var walls = data.levels[currentLevel].walls;
    //console.log('walls', walls);
    for (var i = 0; i < walls.length; i++) {
        var wall = createSprite(walls[i][0], walls[i][1], walls[i][2], walls[i][3]);
        obstacles.add(wall);
        wall.wallx = walls[i][2];
        wall.wally = walls[i][3];
        wall.draw = function () {
            fill(data.levels[currentLevel].wallColor);
            rect(0, 0, this.wallx, this.wally);
        }

    }


    var dots = data.levels[currentLevel].dots;
    totalDots = dots.length;
    //console.log('dots', dots);
    for (var i = 0; i < dots.length; i++) {
        var dot = createSprite(dots[i][0], dots[i][1], dots[i][2], dots[i][3]);
        collectibles.add(dot);

        dot.draw = function () {
            fill(data.levels[currentLevel].dotsColor);
            ellipse(0, 0, 10, 10);
        }
    }


}



function keyPressed() {
    if (keyCode == UP_ARROW) {
        //    circle.position.y -= 5;
        pacman.setSpeed(5, 270);
        pacman.changeAnimation("still");
    } else if (keyCode == DOWN_ARROW) {
        pacman.position.y += 5;
        pacman.setSpeed(5, 90);
        pacman.changeAnimation("down");
    }
    if (keyCode == LEFT_ARROW) {
        //    circle.position.y -= 5;
        pacman.setSpeed(5, 180);
        pacman.changeAnimation("still");
    } else if (keyCode == RIGHT_ARROW) {
        pacman.position.x -= 5;
        pacman.setSpeed(5, 360);
        pacman.changeAnimation("Left");
        //return false; // prevent default
    }
}



function collect(collector, collected) {
    totalDots--;
    if (totalDots == 1) {
        state = 2;
        clearInterval(countdownTimer);
    }

    collected.remove();
}

var seconds = 180;

function secondPassed() {
    var minutes = Math.round((seconds - 30) / 60),
        remainingSeconds = seconds % 60;

    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;

    }


    document.getElementById('countdown').innerHTML = "Timer: " + minutes + ":" + remainingSeconds;
    if (seconds == 0 && totalDots != 0 && state == 0) {
        clearInterval(countdownTimer);
        fill("rgb(0, 121, 242)");
        textSize(50);
        text("you lost, please press any key to try again", 150, 300);
        document.addEventListener("keydown", function () {
            window.location.reload();
        });
        state = 1;


    } else {
        seconds--;

        fill("rgb(0, 121, 242)");
        textSize(50);
        text("you won!", 400, 300);
    }
}
if (state == 0)
    var countdownTimer = setInterval(secondPassed, 1000);
else {
    fill("rgb(0, 121, 242)");
    textSize(50);
    text("you won!", 400, 300);
}
