var questions = [
    "Is the sky blue?", 
    "What is the capital of Latvia?", 
    "What is 2 + 2?",
    "What does 你好 mean?"
];
var answers = [
    "Yes",
    "Riga",
    "4",
    "Hello"
];

var makeQuestion = function(question, answer) {
    var q = document.createElement("p");
    q.innerHTML = question;
    document.body.appendChild(q);

    var t = document.createElement("input");
    t.type = "text";
    t.placeholder = "Answer";
    document.body.appendChild(t);

    var b = document.createElement("button");
    b.innerHTML = "Sumbit Answer.";
    b.onclick = function() {
        var m = document.createElement("p");
        var a = t.value;
        if (a == answer) {
            m.innerHTML = "Correct!";
        } else {
            m.innerHTML = "No, you idiot!";   
        }
        document.body.appendChild(m);
    }
    document.body.appendChild(b);
}

for (var i = 0; i < questions.length; i++) {
   makeQuestion(questions[i], answers[i]);
}


makeQuestion("What is your name?", "Jerry");


