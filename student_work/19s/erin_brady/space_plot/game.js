function game() {
    if (score == 50) chapter = 'cutscene', plotChapter = '4';

    // adds random asteroid
    if (random(100) > asteroidProb) {

        // create an asteroid
        asteroids.push(new Asteroid());
    }

    spaceship.controls();
    spaceship.display();
    spaceship.update();

    /* user display */

    // lives
    fill('#ff3fda');
    textFont('VT323');
    textSize(40);
    text('Lives: ' + playerLives, width - 200, height - 20);

    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].display();
        asteroids[i].update();


        //detect all lasers
        for (let j = 0; j < lasers.length; j++) {
            if (asteroids[i].collide(lasers[j])) {
                asteroids[i].died = true;
                lasers[j].died = true;
                asteroidProb -= 0.1;


                // increment score
                score += 1;
            }
        }

        //collision with spaceship
        if (asteroids[i].collide(spaceship)) {
            asteroids[i].died = true;
            playerLives -= 1;
        }
        if (playerLives == 0) {
            image(shipExplode, spaceship.x, spaceship.y);
            endGame();
        }
    }



    for (let i = 0; i < lasers.length; i++) {
        lasers[i].display();
        lasers[i].update();

        if (lasers[i].died) {
            lasers[i].remove(lasers);
        }
    }

    //clean up dead asteroids & lasers
    for (let i = 0; i < asteroids.length; i++) {
        if (asteroids[i].died) {
            asteroids[i].remove(asteroids);
        }
    }


    /* user display */

    // score
    fill('white');
    textFont('VT323');
    textSize(40);
    text('Score: ' + score, width - 300, 50);
}
