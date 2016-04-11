var container = $('#container');
var score = [0, 0];
var movieData = {};

var questions = [
    {
        q: "Year",
        format: "What year was this made?"  
    },
    {
        q: "Director",
        format: "Who directed this film?"
    }
];

/* get user input */
$('#submit').click( function() {
    searchMovie( $('#movie')[0].value );
});

/* get movie data */
var searchMovie = function(movieTitle) {
    var url = "http://www.omdbapi.com/?t=" + movieTitle;
    $.getJSON(url, function(data) {
        console.log(data);
        if (data.Error) {
            container.append( $("<p>").text("Movie not found, please try again :)") );
        } else {
            populatePageData(data.Title, data.Plot);
            movieData = data;
            setupQuestion();
        }
    });
};

var setupQuestion = function() {
    var randomNumber = Math.floor( Math.random() * questions.length );
    askQuestion(randomNumber, movieData[questions[randomNumber].q]);
};

/* populate basic page data */
var populatePageData = function(title, plot) {
    $('#enter').hide();
    container.append( $("<h2>").text(title) )
        .append( $('<p>').text(plot) );
};

/* ask user questions */
var askQuestion = function(num, value) {
    var q = $('<div>').attr('id', 'question')
        .append( $("<p>")
                .text( questions[num].format ) )
        .append( $("<input>")
                .attr({type: "text", id: "answer"}) 
                )
        .append( $("<input>")
                .attr({type:"submit", id: "submitQ"})
                .on('click', function() {
                    evaluateQuestion( $('#answer')[0].value == value, value );
                })
               );
    container.append(q);
    questions.splice(num, 1);
};

/* evaluate user answers */
var evaluateQuestion = function(correct, value) {
    $('#question').remove();
    score[1]++;
    var a = $("<div>").attr("id", "answer");
    if (correct) {
        score[0]++;
        a.append( $('<p>')
                         .html("You got it right!<br> Score: " + score[0] + "/" + score[1])
                         );
    } else {
        a.append( $('<p>')
                         .html("You got it wrong!  The correct answer was " + value + ".<br> Score: " + score[0] + "/" + score[1])
                         );
    }
    if (questions.length > 0) {
        a.append( $("<input>")
                .attr({type:"submit", value:"Click to ask another question."})
                .on('click', function() {
                    $(a).remove();
                    setupQuestion();
                })
               );
    }
    container.append(a);
};