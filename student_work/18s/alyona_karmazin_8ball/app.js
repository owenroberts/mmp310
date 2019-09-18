//audio
var pickleAudio = new Audio("pickle_rick.mp3");
var coolAudio = new Audio("cool.mp3");
var teacherAudio = new Audio("teacher.mp3");
var MortyAudio = new Audio("morty.mp3");
var YesAudio = new Audio("YesMorty.mp3");
var YesRickAudio = new Audio("YesRick.mp3");
var goodQAudio = new Audio("GoodQMorty.mp3");
var hammerAudio = new Audio("hammer.mp3");
var whateverAudio = new Audio("whatever.wav");
var neahAudio = new Audio("neahMorty.mp3");
var WabaduAudio = new Audio("rick_1.mp3");
var rickAlienAudio = new Audio("rick_the_alien.mp3");
var result2 = $('#result2');
var result = $('#result');
var mBtn = $('#mortyBtn');
var rBtn = $('#rickBtn');

//Try again button style: hidden
$('#retryBtn').css("display", "none");

//random Morty's and Rick's id
const Morty = [2, 73, 61, 152, 85]; //18, 209, 77, 123, 143 
const mortyId = Morty[Math.floor(Math.random() * Morty.length)];
const Rick = [1, 15, 187, 218, 72, 265, 345]; // 361,322,389,
const rickId = Rick[Math.floor(Math.random() * Rick.length)];


//when button Morty is clicked
mBtn.click(function (event) {
    var url = "https://rickandmortyapi.com/api/character/" +
        mortyId;
    $.getJSON(url, function (json) {
        // display Morty's picture  
        result.append("<img src='" + json.image + "'>")
        if (mortyId == 2) { //add 123
            MortyAudio.play();
            result2.append(json.name + ": &#34;You know it's a lot to drop on a kid all at once... Ask Rick!&#34;")
        } else if (mortyId == 73) {
            YesAudio.play();
            result2.append(json.name + ": &#34;ahhh Yes!&#34;");
        } else if (mortyId == 61) {
            goodQAudio.play();
            result2.append(json.name + ": &#34;Good question! My reply is No!&#34;");
        } else if (mortyId == 152) {
            hammerAudio.play();
            result2.append(json.name + ": &#34;I 'm more than just a hammer! I can answer any question! but not this one, try again.&#34;");
        } else if (mortyId == 85) {
            neahAudio.play();
            result2.append(json.name + ": &#34;Neah&#34;");
        }
    });
    mBtn.attr("disabled", true);
    rBtn.attr("disabled", true);
    $('#result2').css("padding-bottom", "35px");
    $('#retryBtn').css("display", "inline-block");
    $('html, body').animate({
        scrollTop: $("#result2").offset().top
    }, 1000);
});

//when button Rick is clicked
rBtn.click(function (event) {
    var url = "https://rickandmortyapi.com/api/character/" +
        rickId;
    $.getJSON(url, function (json) {
        console.log(json);
        // display Rick's picture 
        result.append("<img src='" + json.image + "'>")
        //if Rick is Teacher Rick 
        if (rickId == 345) {
            //Gets quote
            var key = "1546db448f6d828e49c164212e38f0dd"
            var url2 = "https://favqs.com/api/qotd"
            $.getJSON(url2, function (json) {
                teacherAudio.play();
                result2.append(json.name + ": &#34;Anything is possible! Here is a qoute for you to think about: " + json.quote.body + "&#34;")
            });
        }
//if Rick is Pickle Rick 
        else if (rickId == 265) {
            pickleAudio.play();
            result2.append(json.name + ": &#34;Can not predict now! I am a pickle!&#34;");
        }
//if Rick is Cool Rick 
        else if (rickId == 72) {
            coolAudio.play();
            result2.append(json.name + ": &#34;Yes definitely.&#34;");
        }
//if Rick is Rick
        else if (rickId == 1) {
            whateverAudio.play();
            result2.append(json.name + ": &#34;Wharever!&#34;");
//if Rick is Mechanical Rick
        } else if (rickId == 218) {
            YesRickAudio.play();
            result2.append(json.name + ": &#34;The answer is Yes, you just have to be a genius.&#34;");
//if Rick is Juggling Rick   
        } else if (rickId == 187) {
            WabaduAudio.play();
            result2.append(json.name + ": &#34;Wabbalubbadubdub! Yes!&#34;");
//if Rick is Alien          
        } else if (rickId == 15) {
            rickAlienAudio.play();
            result2.append(json.name + ": &#34;This is rick the Alien! my answer is No!&#34;");
        }
    });
    mBtn.attr("disabled", true);
    rBtn.attr("disabled", true);
    result2.css("padding-bottom", "35px");
    $('#retryBtn').css("display", "inline-block");
    $('html, body').animate({
        scrollTop: result2.offset().top
    }, 1000);
});
$('#retryBtn').click(function (event) {
    location.reload();
});
