function story() {
    fill('black');
    rect(0, height - 130, width, height - 100);

    //story

    //progression buttons
    if (mouseX > width - x && mouseX < width - x + w && mouseY > height - y && mouseY < height - y + h) { //next
        fill('#3f3f3f'); //dark gray
        rect(width - x, height - y, w, h);
    }

    //story text
    textSize(30);
    fill(textColor);
    textFont('VT323');
    text(story1, width / 15, height - 100);
    text(story2, width / 15, height - 70);
    fill('white');
    textSize(20);
    text('Next ▶', width - x + 15, height - y + 30);

    //chapters
    if (plotChapter == '1') {
        textColor = 'white';
        story1 = "Once upon a time, in an alternate dimension where fearsome aliens roam the galaxy, the spacecraft Trinity"
        story2 = "must evade her assailant.";

        push();
        translate(shipX, shipY);
        shipX += 1;
        shipY += 1;
        rotate(radians(135));
        image(shipSprite, 0, 0); //width - 200
        pop();


        push();
        translate(shipX - 300, shipY - 300);
        rotate(radians(325));
        image(bossSprite, 0, 0);
        pop();


    } else if (plotChapter == '2') {
        textColor = 'white';
        story1 = "An asteroid field is up ahead! Maybe she can use it for cover."
        story2 = "";
        shipY = height / 2;

        //spaceship
        push();
        translate(shipX, shipY);
        shipX += 2;
        rotate(radians(90));
        image(shipSprite, 0, 0); //width - 200
        pop();

        //boss Ship
        push();
        translate(bossShipX, shipY);
        if (bossShipX < width / 2 - 80) {
            bossShipX += 2;
        }
        rotate(radians(270));
        image(bossSprite, 0, 0);
        pop();


        //draw asteroid field

        for (let i = 0; i < astField.length; i++) {
            astField[i].move();
            astField[i].display();
        }

    } else if (plotChapter == '3') {
        push();
        translate(width / 2, 300);
        scale(3.0);
        image(bossSprite, 0, 0);
        pop();

        textColor = 'orange';
        story1 = "YOU CAN RUN... BUT YOU WILL NEVER ESCAPE!";
        story2 = "";
    }
}
