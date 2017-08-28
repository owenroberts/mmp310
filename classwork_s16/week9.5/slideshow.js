var imgs = [
    "cat1.jpg", 
    "cat2.jpg", 
    "cat3.jpg"
];
var labels = [
    "I am cat.",
    "I'm wearing a sweater.",
    "I'm hungry."
];

var $slideshow = $("<div>")
    .attr("id", "slideshow");
$("#container").append($slideshow);

var slides = [];

for (var i = 0; i < imgs.length; i++) {
    
    var $d = $("<div>")
        .attr("id", "s"+i)
        .addClass("slide");

    var $im = $("<img>")
        .attr("src", "imgs/" + imgs[i]);
    
    var $l = $("<div>")
        .addClass("label")
        .html(labels[i]);
    
    $d.append($im).append($l);
    
    $slideshow.append($d);
    slides.push($d);
}

slides[Math.floor(Math.random()*slides.length)].show();

var detectSlide = function() {
    var n;
    for (var i = 0; i < slides.length; i++){
        if (slides[i].css("display") == "block") {
            n = i;
        }
    }
    slides[n].hide();
    return n;
}


var $next = $("<button>")
    .html("Next Slide")
    .attr("id", "next")
    .click(function() {
        var n = detectSlide();
        if (n < slides.length - 1) n++;
        else n = 0;
        slides[n].show();
    });

var $prev = $("<button>")
    .html("Previous Slide")
    .attr("id", "prev")
    .click(function() {
        var n = detectSlide();
        if (n > 0) n--;
        else n = slides.length - 1;
        slides[n].show();
    });

$slideshow.append($prev).append($next);


/* pop out images */

$("img").click( function() {
    $("#popup").remove();
    var $imageElement = $("<img>")
        .attr("src", this.src);
    var $popup = $("<div>")
        .attr("id", "popup")
        .append($imageElement);
    var w = window.innerWidth;
    var h = window.innerHeight;
    $imageElement.css({
        left: (w - $imageElement[0].width) / 2,
        top: (h - $imageElement[0].height) / 2
    });
    
    var close = $("<div>")
        .attr("id", "close")
        .text("X")
        .click( function() {
             $("#popup").remove();
        });
    
    $popup.append(close);
    
    $("#container").append($popup);
});
















