/*
	task list app
*/

// get the user task
const submitBtn = document.getElementById("submit");
submit.addEventListener("click", addTask);

addEventListener("keydown", function(event) {
	// console.log(event.key);
	if (event.which == 13) {
		addTask();	
	}
});

// add the task to html
const tasksContainer = document.getElementById("tasks");
const taskInput = document.getElementById("add-task");

function addTask() {
	const newTask = taskInput.value;
	if (newTask) {
		const taskDiv = document.createElement("div");
		taskDiv.classList.add("task");
		tasksContainer.appendChild(taskDiv);
		
		const taskText = document.createElement("p");
		taskText.textContent = newTask;
		taskDiv.appendChild(taskText);
		
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "Delete";
		deleteBtn.onclick = function() {
			this.parentNode.remove();	
		}
		taskDiv.appendChild(deleteBtn);
	}
}


// remove completed tasks





