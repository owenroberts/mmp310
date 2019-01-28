const query = document.getElementById('query');
const gifs = document.getElementById('gifs');
query.addEventListener("keydown", function(event) {
	if (event.which == 13) {
		
		// get search term
		const q = query.value;
		
		// create search url
		
		// search endpoint
		const endpoint = "https://api.giphy.com/v1/gifs/search";
		// random endpoint 
//		const endpoint = "https://api.giphy.com/v1/gifs/random";
		const key = "2MACBWIkzZteDHAMTJRqDrs3ZDEkNcmR";
		
		// search url
		const url = `${endpoint}?q=${q}&api_key=${key}`;
		// random url
//		const url = `${endpoint}?tag=${q}&api_key=${key}&rating=g`;
		
		const promise = fetch(url)
			.then(function(response){
				return response.json();
			})
			.catch(function(error) {
				console.log(error);
			});
		
		promise.then(function(json){
			// for loop for search results
			for (let i = 0; i < json.data.length; i++) {
				const gif = json.data[i];
				
				// one gif for random results
//				const gif = json.data;
			
				// add image to div
				const image = new Image();
				image.src = gif.images.downsized.url;
				gifs.appendChild(image);
			}
		});
		
		promise.catch(function(error) {
			console.log(error);
		});
	}
});









