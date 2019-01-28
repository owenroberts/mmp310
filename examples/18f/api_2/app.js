// gifs div 
const gifs = document.getElementById('gifs');

// api key
const key = "2MACBWIkzZteDHAMTJRqDrs3ZDEkNcmR";

// user inputs 
const queries = document.getElementsByClassName('query');
for (let i = 0; i < queries.length; i++) {
	queries[i].addEventListener('keydown', function(event) {
		if (event.which == 13) {
			const query = event.currentTarget.value;
			addGif(query);
		}
	});
}

const button = document.getElementById('random');
button.addEventListener('click', function(event) {
	addGif("banana");
});

// gets gif from giphy api
function addGif(tag) {
	const url = `https://api.giphy.com/v1/gifs/random?tag=${tag}&rating=g&api_key=${key}`;
	
	fetch(url, {mode: 'no-cors'})
		.then(function(response){
			console.log(response);
			return response.json();
		})
		.then(function(json){
			console.log(json);
			const img = new Image();
			img.src = json.data.images.downsized.url;
			gifs.appendChild(img);
		
			// replace gif with a new one
			img.addEventListener('click', function(event) {
				this.remove();
				addGif(tag);
			});
			
		})
		.catch(function(error){
			console.log('error', error);
		});
}









