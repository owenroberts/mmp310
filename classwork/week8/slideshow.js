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

var slideshow = document.createElement("div");
slideshow.id = "slideshow";
document.getElementById("container").appendChild(slideshow);

var slides = [];

for (var i = 0; i < imgs.length; i++) {
    var d = document.createElement("div");
    d.className = "slide";
    d.id = "s"+i;
    var im = new Image();
    im.src = "imgs/" + imgs[i];
    var l = document.createElement("div");
    l.className = "label";
    l.innerHTML = labels[i];
    d.appendChild(im);
    d.appendChild(l);
    slideshow.appendChild(d);
    slides.push(d);
}

slides[Math.floor(Math.random()*slides.length)].style.display = "block";

var detectSlide = function() {
    var n;
    for (var i = 0; i < slides.length; i++){
        if (slides[i].style.display == "block") {
            n = i;
        }
    }
    slides[n].style.display = "none";
    return n;
}


var next = document.createElement("button");
next.innerHTML = "Next Slide";
next.id = "next";
next.onclick = function() {
    var n = detectSlide();
    if (n < slides.length - 1) n++;
    else n = 0;
    slides[n].style.display = "block";    
}
var prev = document.createElement("button");
prev.innerHTML = "Previous Slide";
prev.id = "prev";
prev.onclick = function() {
    var n = detectSlide();
    if (n > 0) n--;
    else n = slides.length - 1;
    slides[n].style.display = "block";  
}
slideshow.appendChild(prev);
slideshow.appendChild(next);

















