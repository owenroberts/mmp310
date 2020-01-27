//2nd scene
class ekaterinaInstructions extends Scene {

    preload() {

        this.instructions = loadImage('images/ekaterina/instructions.png');
        this.startGame = loadImage('images/ekaterina/begin.gif');
        this.press = loadSound('sounds/ekaterina/press.mp3');
        this.press.setVolume(1.0);
    }

    draw() {

        camera.off();
        image(this.instructions, 0, 0);
        image(this.startGame, 380, 650);
        camera.on();

        if (keyIsDown(ENTER)) {
            changeScene('ekaterina');
            this.press.play();
        }
    }
}