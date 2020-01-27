class youlose extends Scene {
    draw() {
        camera.off();
        background('black');
        textSize(100);
        textAlign(CENTER, CENTER);
        fill('white');
        text("You Lose", width / 2, height / 2);
        text("Enter To Try Again", width / 2, height / 2 + 100);
        
        if (keyIsDown(ENTER)) {
            changeScene('nelson');   
        }
    }
}