/* 3d Donut - Boozy 04/22/20 */

// control rotation
var rotX, rotY, rotZ

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    //Boozy movements
    createP("Look up and down").position(20, 50);
    createP("Look left and right").position(20, 150);
    createP("Swirl around!").position(20, 250);

    //movement sliders
    rotX = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
    rotX.position(20, 80);

    rotY = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
    rotY.position(20, 180);

    rotZ = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
    rotZ.position(20, 280);
}

function draw() {
    background(100, 60, 100);

    noStroke();

    // lights();
    ambientLight(20, 40, 20);
    directionalLight(255, 200, 200, 1, 1, -1);
    pointLight(255, 255, 255, mouseX - width / 2, mouseY - height / 2, 100);
    ambientMaterial(221, 160, 221);
    specularMaterial(123, 0, 123);
    shininess(255);

    //floor
    push();
    translate(0, 200);
    rotateX(PI * 0.5);
    plane(1000, 1000);
    pop();

    //goo
    push();
    translate(0, 200);
    specularMaterial(100, 225, 100);
    rotateX(PI * 0.5);
    ellipsoid(300, 200, 10);
    pop();

    rotateX(rotX.value());
    rotateY(rotY.value());
    rotateZ(rotZ.value());


    //body of donut
    specularMaterial(223, 115, 16);
    torus(180, 60);

    //teeth TR
    push();
    translate(-100, -20, 40);
    rotateZ(PI * -0.25);
    rotateX(PI * 0.15);
    cone(40, 100);
    pop();

    //teeth TL
    push();
    translate(100, -20, 60);
    rotateZ(PI * 0.25);
    rotateX(PI * 0.15);
    cone(20, 100);
    pop();

    //teeth BL
    push();
    translate(60, 110, 60);
    rotateZ(PI * -0.25);
    rotateX(PI * 0.75);
    rotateY(PI * -0.15);
    cone(40, 100);
    pop();

    //teeth BR
    push();
    translate(-60, 110, 80);
    rotateZ(PI * 0.25);
    rotateX(PI * 0.75);
    rotateY(PI * -0.15);
    cone(20, 100);
    pop();

    specularMaterial(100, 225, 100);

    //right eye
    push();
    translate(-100, -180, 60);
    ellipsoid(40, 40, 50);
    pop();

    //left eye
    push();
    translate(100, -180, 60);
    ellipsoid(80, 80, 50);
    pop();

    specularMaterial(100, 50, 0);

    //right eyebrow
    push();
    translate(-100, -240, 60);
    rotateZ(PI * -0.85)
    box(140, 20);
    pop();

    //left eyebrow
    push();
    translate(100, -250, 60);
    rotateZ(PI * 0.85)
    box(140, 50);
    pop();

    specularMaterial(100, 0, 0);

    //right eye
    push();
    translate(-100, -180, 100);
    sphere(20);
    pop();

    //left eye
    push();
    translate(100, -160, 80);
    sphere(40);
    pop();
}
