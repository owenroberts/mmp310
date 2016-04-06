var slides = [
    { 
        img: "cat1.jpg",
        label: "I am a cat."
    },
    { 
        img: "cat2.jpg",
        label: "I'm wearing a sweater."
    },
    { 
        img: "cat3.jpg",
        label: "I'm hungry."
    }   
];

var $slideshow = $("<div>")
    .attr("id", "slideshow");
$("#container").append($slideshow);

for (var i = 0; i < slides.length; i++) {
    var s = slides[i];
    var $d = $("<div>")
        .attr("id", "s"+i)
        .addClass("slide");

    var $im = $("<img>")
        .attr("src", "imgs/" + s.img);
    
    var $l = $("<div>")
        .addClass("label")
        .html(s.label);
    
    $d.append($im).append($l);
    
    $slideshow.append($d);
    s.div = $d;
}
console.log(slides);

slides[Math.floor(Math.random()*slides.length)].div.show();

var detectSlide = function() {
    var n;
    for (var i = 0; i < slides.length; i++){
        if (slides[i].div.css("display") == "block") {
            n = i;
        }
    }
    slides[n].div.hide();
    return n;
}


var $next = $("<button>")
    .html("Next Slide")
    .attr("id", "next")
    .click(function() {
        var n = detectSlide();
        if (n < slides.length - 1) n++;
        else n = 0;
        slides[n].div.show();
    });

var $prev = $("<button>")
    .html("Previous Slide")
    .attr("id", "prev")
    .click(function() {
        var n = detectSlide();
        if (n > 0) n--;
        else n = slides.length - 1;
        slides[n].div.show();
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
















