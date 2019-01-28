var startButton = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questions = document.getElementsByTagName("input");
var countDisplay = document.getElementById("countdown");

quiz.style.display = "none";

startButton.addEventListener("click", function() {
    quiz.style.display = "block";
    this.style.display = "none";
    
    var count = 10;
    var countdown = function() {
        if (count == 0) {
            clearInterval(countdownInterval);
            var checked = 0;
            for (var i = 0; i < questions.length; i++) {
                if (questions[i].checked) {
                    checked++;
                }
                startButton.style.display = "block";
                startButton.innerHTML = "Try again.";
            }
            countDisplay.innerHTML = "Out of time. Your score is " + checked + " / " + questions.length;
        } else {
            countDisplay.innerHTML = "Time to complete quiz: " + count;
            count--;
        }
    };
    var countdownInterval = setInterval(countdown, 1000);
});

