---
layout: main
title: MMP 310 - Schedule
dek: Schedule with class notes & assignments
---

Go to [Home](index.html)

## Week 1
**Introduction**
- Introduce class and syllabus
- Quick [reivew](week1/) of HTML, CSS and JavaScript, file structure, web architecture
	- [Class example](week1/review/)
- [Intro to command line / Git](week1/git.html)
- [Publishing with GitHub](week1/github.html)
- **Assignment 1: HTML/CSS homepage**
	- Create a simple web site to use as the portfolio page for your work this semester
	- Your site should have at least one of each:
		- Image
		- Style sheet
		- Menu with links
	- Upload site to GitHub to publish with GitHub Pages

## Week 2
**Input & data storage with variables**
- Review GitHub publishing
- [JavaScript input & variables](week2/)
	- [Class example](week2/input/)
- **Assignment 2: Madlibs**
	- [Madlibs](https://en.wikipedia.org/wiki/Mad_Libs)
	- Create a program that takes information from a user and creates a response that tells a story about that user
	- The information is usually used in unexpected ways
	- Use text input or select menus
	- Use HTML inputs to get user information
	- Save the information using JavaScript
	- Give the user a response that shows their information has been captured
	- Add a stylesheet with original styling for the form



## Week 3
**Logic**
- [Data types: Number, String, Boolean](week3/)
	- [Class Example](https://owenbmcc.github.io/classwork310/input_2/)
- [Logic](week3/logic.html)
- **In Class Assignment**
	- Rewrite Madlibs assignment using a test to verify input
- **Assignment 3: Quiz Program**
	- Make a quiz with a least three questions
	- Use `input` or `select` for user input
	- Use logic to verify user answers and display feedback
	- Count the total number correct and display results
	- Extra Credit: Use images as response choices for user
	- Extra Credit: Give hints to user on wrong response

## Week 4
**Arrays**
- [Arrays](week4/array.html)
- **In Class**
	- Use an Array to store the correct answers in Quiz program
- [Math, random](week4/random.html)
- **Assignment 4: Magic 8 Ball**
	- [Magic 8 Ball](https://en.wikipedia.org/wiki/Magic_8-Ball)
	- Recreate the Magic 8 Ball game using JavaScript
	- Magic 8 Ball works by answering Yes/No questions
	- Your program will need to take a users question and respond - with one of the classic Magic 8 Ball responses (or you can write your own responses)
	- Create an `array` with all possible answers and use `Math.random()` to get a random choice
	- Use CSS to design the interface
	- Bonus: Animate the response in some way
	- Bonus: Make responses the include the input in some way

## Week 5
**Loops**
- [Loops](week5/loops.html)
- **Pair Programming**
	- Recreate [Design human design](http://designhumandesign.media.mit.edu/)
- **[Code Academy: For Loops](https://www.codecademy.com/courses/javascript-beginner-en-NhsaT/0/1)**
- **Assignment 5: Random password**
	- Generate a random password for a user using a loop
	- Program should take a username, number of characters and keyword
	- Output a randomly generated password with the correct number of characters
	- The password should use the characters in the keyword in some way, but not exactly the same, for example: if keyword = banana, password = 1bAnAnA4u

## Week 6
**Functions**
- [Functions](week6/functions.html)
- **Pair Programming**
	- Write a function that will return a users age
	- User inputs birth day, month and year
	- Return correct age
	- Will it work for today or any day in the future?
- [DOM & Events](week6/events.html)
- **Assignment 6: Task List**
	- Write a program that takes user input and adds a new element to a task list
	- Use `textarea` or `input` to add tasks to the list
	- You could write other types of lists as well (favorite movies, songs, etc.)
	- Add a style.css page with styles for the list 
	- Bonus: Add a button to cross out or remove completed tasks

## Week 7
**Objects**
- [Objects](week7/objects.html)
- **Pair Programming**
	- Quiz show using objects
	- Rewrite one of partner's quiz show program (or design a new one)
	- Use an object for each question to store question and answer
- [JSON](week7/json.html)
- **Assignment 7: Comic**
	- Using object notation, make a comic out of images or drawings with captions
	- Choose any subject, story, source material
	- Bonus: Make it interactive

## Week 8
**jQuery & JSON API**
- [jQuery](week8/jQuery.html)
- **Pair Programming**
	- Rewrite the comics assignment with jQuery
	- Is it easier?  Harder?
- [JSON API](week8/api.html)
- **Midterm**
	- Memory Game ([example](http://mark-rolich.github.io/MemoryGame.js/))
	- Use the Giphy API to load user searched images
	- Add two copies of each image to the DOM
	- User clicks on one image at a time to reveal them
	- If they get a match the images stay revealed
	- Add CSS and other features to the game

## Week 9
**Midterm**
- Finish memory game
- Midterm rubric: 100 total points
	- 20: JavaScript
		- No bugs
		- jQuery and JavaScript used correctly
		- Loops and if statements used correctly
	- 20: JSON and API
		- Working API request
		- Handle JSON data
	- 20: Original CSS styles
	- 20: Added features
		- Keep score
		- Notify on winning
		- Add animation to card reveal
	- 20: User Interface
		- User enters a search term or selects a category
		- Designed to make interaction with the game clear

## Week 10
**Final Pitch**
- [Time](week10/time.html)
- [HTML5 Media](week10/media.html)
- Final Project Pitch
	- Present a concept for the final project
	- Can work inidividual or in pairs
	- Create a web application using an API
	- [List of public APIs](https://github.com/toddmotto/public-apis)
	- Must take user input and return feedback
	- Can be game, interactive visualization, information based app
- Example web apps:
	- [Koalas to the max](http://www.koalastothemax.com/)
	- [Every satellite orbiting earth](http://qz.com/296941/interactive-graphic-every-active-satellite-orbiting-earth/)
	- [Design a wig](http://www.vam.ac.uk/designawig)
	- [Blackjack](http://html5blackjack.net/)
	- [Pet finder](http://api.emilyhashemi.com/)



<!-- 
media - css3 - canvas - 

more git
canvas drawing
css3 animation
animation
threejs?
game?
libraries?

seriously need to rework this stuff...
- no d3 no more p5 stuff
- maybe another game engine...
- maybe three.js
- need to think about order...
	- data, logic, loops, arrays, function, objects - 
	- data, logic, functions, loops, arrays, objects - 
	- data, arrays, logic, loops, functions, 
	- data, logic, arrays, loops, functions, 
- assignments
	- madlibs
		- input, dom, variables, functions
	- magic 8 ball
		- input, array
	- quiz show
		- input, logic, [array]
	- timer
		- return function
	- password generato
		- loop
	- user style page
	- twitter
	- task list
	- interactive animation
	- sol lewitt drawing
	- json thing
	- interactive video
	- hangman
	- memory game
	- 
-->
