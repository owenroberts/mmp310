function foo(){
    console.log(arguments);
    document.write("Hello :)");
}
foo();
console.log(typeof foo);

var bar = function() {
    console.log(arguments);
    document.write("world.");
};
bar();
console.log(typeof bar);
document.write("<br><br>");

var greet = function(name, greeting) {
    console.log(arguments);
    if (arguments.length > 1) {
        var text = greeting + ", " + name;
        document.write(text);
    }
};

greet("Jerry");
greet("Jenny", "Hello");
greet("Jerry", "Hi");

var add = function(n1, n2) {
    console.log(arguments);
    return n1 + n2;
};

var x = add(2, 2);
var y = add(x, 2);
var z = add(x, y);
document.write("<p>" + add(x, y) + "</p>");

(function(x) {
    alert(x);
})("Hello world!");

var assign = function() {
    var n = 0;
    var m = 1;
};
var multiply = function() {
    return n * m;
};
assign();
//multiply();


var j;
var k;

var assignValues = function() {
    j = 5;
    k = 2;
};
var divide = function() {
    return j / k;
};
//assignValues();
var l = divide();
document.write("<p>" + l + "</p>");
















