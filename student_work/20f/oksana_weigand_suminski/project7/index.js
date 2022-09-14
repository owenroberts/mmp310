//------------------------ Game Project---------------------------
//Do you remember the game Battleship we created before? well .... it is time to make it with the DOM!!
//We are providing you with the design of a board (in the DOM) for a player1, you have to create the board for the player2 using the id property 'board_player2' -> it is the second list (ul) in your index.html file
//First ask the players for their names (use propmt)
//Now each time the turn player clicks on any cell of the opponent's board (you have to verify if the player is clicking the right board) the program needs to verify if there is an opponent's ship in that cell. If it is then the opponent has one less ship
//We want you to store the data of each player in two Player objects. Each object has to store: name, remaining boats, and their respective board.
//Each board needs to be initialized randomly with '0' and four '1' wich means the state of the cell. Numbers 1 are representing the 4 positions of the player's ships
//Also we want you to display the name of the turn player in the tag that has the id 'turn_player'. And if there is a winner  a text with: 'Congratulationes {name_player}!! you win'
//in the index.html file you are going to find 4 more ids: 'name_player1' , 'name_player2' , 'ships_player1' , 'ships_player2'. We want to see the information of each player in the respective elements
//As our previous Battleship, the winner is the player that hits the 4 opponent's ships first
//one more Thing create a 'reset' and a 'new game' buttons as childs of the element with the id 'buttons'. the reset button has to start the game again and the new game create a new game with new players and a new random board.

let player1 = {
	name: prompt("Type a name of the first player"),
	shipCountTotal: 4,
	board: [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
};

let player2 = {
	name: prompt("Type a name of the second player"),
	shipCountTotal: 4,
	board: [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
};
const board_player1 = document.getElementById("board_player1");
const board_player2 = document.getElementById("board_player2");
const name_player1 = document.getElementById("name_player1");
const name_player2 = document.getElementById("name_player2");
const ships_player1 = document.getElementById("ships_player1");
const ships_player2 = document.getElementById("ships_player2");
const turn_player = document.getElementById("turn_player");
const resetButton = document.getElementById("buttons");
//resetButton.addEventListener('click', gameRestart);

name_player1.textContent = player1.name;
name_player2.textContent = player2.name;
ships_player1.textContent = player1.shipCountTotal;
ships_player2.textContent = player2.shipCountTotal;
let boardInPlay = "board_player1";
turn_player.textContent = player1.name;

let currentPlayer = player1;
function onBoardClick(event) {
	let currentCell = event.target;
	//disabling my own board when foe's turn
  let boardElementId = currentCell.parentElement.parentElement.id;
  console.log(boardElementId);
	if (boardElementId === "board_player1" && currentPlayer === player1 ||
    boardElementId === "board_player2" && currentPlayer === player2) {
		return;
	}
	//currentCell.style.visibility = "hidden";
	let coordinates = currentCell.textContent.split(",");
	let x = parseInt(coordinates[0]);
	let y = parseInt(coordinates[1]);
	console.log(x);
	console.log(y);

	//swithcing player's boards
  let foe;
  let foeShips;
  let playerTurn;
	if (currentPlayer === player1) {
    foe = player2;
    foeShips = ships_player2;
    playerTurn = turn_player;
	} else {
    foe = player1;
    foeShips = ships_player1;
    playerTurn = turn_player;
  }
  //displaying hit or miss, reducing ships
	if (foe.board[x][y] === 1) {
		foe.board[x][y] = 0;
		foe.shipCountTotal--;
    alert("Hit!");
    foeShips.textContent = foe.shipCountTotal;
    currentCell.style.backgroundColor = '#C100FE';
	} else {
    alert("Miss!");
    currentCell.style.backgroundColor = '#00147D';
	}
	console.log(player1.board);
	console.log(player2.board);
//displaying players
	if (currentPlayer === player1) {
    currentPlayer = player2;
    playerTurn.textContent = player2.name;
	} else {
    currentPlayer = player1;
    playerTurn.textContent = player1.name;
  }
  //displaing winner 
  let winner;
if (player1.shipCountTotal === 0){
  winner = player2;
}else if(player2.shipCountTotal === 0){
  winner = player1;
}
if (winner){
  turn_player.textContent = `Congratulations ${winner.name}, you win!`;
  console.log(winner);
}
}


for (var x = 0; x < 4; x++) {
	const li = document.createElement("li"); // creating childs for the list (board), in this case represent a row number 'x' of the board

	for (var y = 0; y < 4; y++) {
		const cell = document.createElement("div");
		cell.className = "square"; // adding css properties to make it looks like a square
		cell.textContent = `${x},${y}`; // saves the coordinates as a string value 'x,y'
		cell.value = 0; //state of the cell

		//this function adds the click event to each cell
		cell.addEventListener("click", onBoardClick);
		li.appendChild(cell); //adding each cell into the row number x
	}
	board_player1.appendChild(li); //adding each row into the board
}
//adding ships (choosing coordinates randomly)
let getCoordinates = (ship) => {
	let x = Math.floor(Math.random() * 4) + 0;
	let y = Math.floor(Math.random() * 4) + 0;
	while (ship.board[y][x] === 1) {
		x = Math.floor(Math.random() * 4) + 0;
		y = Math.floor(Math.random() * 4) + 0;
	}
	ship.board[y][x] = 1;
	
};
//positioning ships for player1

for (let i = 0; i < 4; i++) {
getCoordinates(player1);
}
for (let i = 0; i < player1.board.length; i++) {
	console.log(player1.board[i].toString());
}

//board of player2
for (var x = 0; x < 4; x++) {
	const li = document.createElement("li");
	for (var y = 0; y < 4; y++) {
		const cell = document.createElement("div");
		cell.className = "square"; // adding css properties to make it looks like a square
		cell.textContent = `${x},${y}`; // saves the coordinates as a string value 'x,y'
		cell.value = 0; //state of the cell

		//this function adds the click event to each cell
		cell.addEventListener("click", onBoardClick);
		li.appendChild(cell); //adding each cell into the row number x
	}
	board_player2.appendChild(li); //adding each row into the board
}
//positioning ships for player2

for (let i = 0; i < 4; i++) {
  getCoordinates(player2);
}
for (let i = 0; i < player2.board.length; i++) {
	console.log(player2.board[i].toString());
}
// function gameRestart(){
 // getCoordinates();
//   player2.shipCountTotal = 4;
//   player2.shipCountTotal = 4;
//   cell.value = 0
//   currentCell.style.visibility = "visible";
//   console.log(gameRestart);
// }
