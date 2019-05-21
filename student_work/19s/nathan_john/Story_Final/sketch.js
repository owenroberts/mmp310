/*
	mmp 310 week 1
	interactive story
	characters sketch
	by nathan
*/
// global variables

var story = "Once upon a time, there were two friends named Bobby and Fred.Click on one to see how they met.";

var chapter = 1;

var itemClicked = "blackGuy";
var bgColor = "lightblue";

var whoToDestroy = "";

var sunX = 100;
var sunY = 100;
var sunSize = 100;
var storyX = 900;
var storyY = 50;

var winWidth = window.innerWidth;

var fredX = (winWidth / 2) - 300;
var fredY = 200;
var fredWidth = 200;

var bobbyY = 200;
var bobbyX = (winWidth / 2) + 300;
var bobbyWidth = 200;
var bobby = null;
var fred = null;


function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(20);
    textAlign(CENTER, CENTER);
    storyX = width / 2;
    storyY = height - 50;
    bobby = new Person(bobbyX, bobbyY, "#c67400");
    fred = new Person(fredX, fredY, "#ffebba");
}

function draw() {
    background(bgColor);
    fred.display();
    bobby.display();
    // Sun
    drawSun();
    drawText(story);
}

function drawSun() {
    fill('gold');
    noStroke();
    ellipse(sunX, sunY, sunSize);
}

function mouseClicked() {

    /* who was clicked on? */
    var who = '';
    var fredDistance = dist(mouseX, mouseY, fred.x, fred.y);
    if (fredDistance < fredWidth / 2) {
        who = 'fred';
    }

    var bobbyDistance = dist(mouseX, mouseY, bobby.x, bobby.y);
    if (bobbyDistance < bobbyWidth / 2) {
        who = 'bob';
    }

    doStory(who);
}

function doStory(who) {

    switch (chapter) {
        case 1:
            if (who == 'bob') {
                 setupBobbyChapterFive();
            } else if (who == 'fred') {
                setupFredChapterTwo();
            }
            break;
        case 2:
            setupFredChapterThree();
            break;
        case 3:
            setupFredChapterFour();
            break;
        case 4:
            setupBobbyChapterFive();
            break;
        case 5:
            setupBobbyChapterSix();
            break;
        case 6:
            setupBobbyChapterSeven();
            break;
        case 7:
             setupBobbyChapterEight();
            break;
        case 8:
            setupBobbyFredChapterNine();
            break;
        case 9:
             setupFredChapterTen();
            break;
        case 10:
            setupFredChapterFour();
        case 11:
            setupBobFredChapterEleven(who);
        break;
    }
    //    chapter = chapter + 1;
}

function setupFredChapterTwo() {
    bgColor = "#FF8140";
    bobby.alive = false;
    fred.x = width / 2;
    story = "Fred is an MMP major at BMCC. He is a kid from Brooklyn. He is an average kid from Brooklyn, He didn't expect to like the idea of web design and graphic design. ";
    chapter = 2;
}

function setupFredChapterThree() {
    bgColor = "#FF8140";
    bobby.alive = false;
    fred.x = width / 2;
    story = "Fred didn't really like the aspect of college because he didn't know anyone. So one day he entered MMP 100, and he sat down and next to him was a Bobby. ";
    chapter = 3;
}

function setupFredChapterFour() {
    console.log('chapter 4');
    sunY = 200;
    bgColor = 'purple';
    fred.x += 100;
    chapter = 3;
    fred.alive = true;
    bobby.alive = true;
    story = "During that class, they were discussing the different programs that they both use. The both used brackets and Atom to write their code. "
    chapter = 9;
}

function setupBobbyChapterFive() {
    console.log('chapter 5');
    sunY = 200;
    bgColor = 'blue';
    bobby.x -= 100;
    chapter = 4;
    fred.alive = false;
    story = "This is Bobby. Like his friend Fred, He is also from Brooklyn.But Boddy is from a different part of Brooklyn."
    chapter = 5;
}

function setupBobbyChapterSix() {
    console.log('chapter 6');
    sunY = 200;
    bgColor = 'green';
    bobby.x -= 100;
    chapter = 5;
    fred.alive = false;
    story = "This is Bobby. Recently transfered from another college and he also wanted to do something else."
    chapter = 6;
}

function setupBobbyChapterSeven() {
    console.log('chapter 7');
    sunY = 200;
    bgColor = 'orange';
    bobby.x -= 100;
    chapter = 7;
    fred.alive = false;
    story = "Bobby had a class with Fred before but he didn't know anyome like Fred, so when Fred sat down next to him, he decided to initiate the conversation."
}

function setupBobbyChapterEight() {
    console.log('chapter 8');
    sunY = 200;
    bgColor = 'gray';
    fred.x += 100;
    chapter = 7;
    fred.alive = true;
    bobby.alive = true;
    story = "As they were discussing which program was better, they got in a huge argument.  "
    chapter = 8;
}

function setupBobbyFredChapterNine()
{console.log('chapter 9');
    sunY = 200;
    sunX = 200;
    bgColor = 'white';
    fred.x +=300;
    chapter = 8;
    fred.alive = true;
    bobby.alive = true;
    story = "The argument got heated and they wanted to both kill eachother. You decide who dies."
    chapter = 9;
}

function setupFredChapterTen()
{console.log('chapter 10');
    sunY = 200;
    sunX = 300;
    bgColor = 'white';
    fred.x += 100;
    chapter = 4;
    fred.alive = true;
    bobby.alive = true;
    story = "The argument got heated and they wanted to both kill eachother. You decide who dies."
    chapter = 11;
}

function setupBobFredChapterEleven(who){
    console.log(who);
    if (who == 'bob') {
        fred.alive = false;
        story = "Fred died.";
    }
 
    if (who == 'fred') {
        bobby.alive = false;
        story = "Bobby died.";
    }
    
    bgColor = 'green';
    
}

function drawText(words) {
    fill(0);
    textAlign(CENTER, CENTER);
    text(words, width / 4, height - 75, width / 2);
}
