
// google custom search api key AIzaSyBlQrZ9PU_YxL9bA49X9ZmFw5PhVPb83FA

// loading json data
var url="https://pokeapi.co/api/v2/pokemon/";
var first = true;
var sec = true;
var clicked = false;
var n=Math.floor(Math.random()*803);
$.getJSON(url+n+"?data=json", function(json){
    console.log (json);
     pokemon = loadImage(json.sprites.front_default);
     
});

// image and object
var pokemon;
var squares = [];
var oneclick = true;
function preload() {
   
}
function setup() { 
    createCanvas(720, 720);
     noStroke();
    textAlign(CENTER);
    fill(127);
   
}

function draw() {
   background('black');
   
   // if (pokemon) image(pokemon, 0, 0, width, height);
    if (!first && sec) {
        image(pokemon, 0, 0, width, height);
        var c = get(width/2, height/2);
        squares.push(new Square(0,0,width,c));
        sec = false;
    }
    
    if (!pokemon){
        text("loading", width/2, height/2);
    } else if (first) {
        image(pokemon, 0, 0, width, height);
        first = false;
    }
    
    
     for (var i = 0; i < squares.length; i ++) {
        squares[i].display();   
    }
     if (!clicked && pokemon) {
         fill(127);
        text("click here", width/2, height/2);
    }
}
function mouseMoved() {
    if (!clicked && pokemon) {
        clicked = true;
    }
    var len = squares.length;
    for(var i = 0; i < len; i++) {
        if(squares[i].collide(mouseX, mouseY)) {
            squares[i].divide();
        }
    }
}

function Square(x, y, s, c) {
    this.x = x;
    this.y = y;
    this.color = c;
    this.size = s;
    this.display = function() {
        fill(this.color);
        rect(this.x, this.y, this.size, this.size);
    };
    this.collide= function(x,y) {
        if(x>this.x && x<this.x+this.size && y>this.y && y<this.y+this.size){
            return true;
        }
        else{
            return false;
        }
    };
    this.divide = function() {
        if(pokemon){
            image(pokemon, 0, 0, width, height);
            var half = this.size/2;
            for(var x=this.x; x<this.x+this.size; x+=half) {
                for(var y=this.y; y<this.y+this.size; y+=half) {
                    var c = get(x + half/2, y + half/2 );
                    var s = new Square(x,y,half,c);
                    squares.push(s);
                    var index=squares.indexOf(this);
                }
            }
            squares.splice(index,1);
        }
    };
}