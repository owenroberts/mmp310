$(document).ready(function() {
	$('#query').on("keypress", function(event){
		/* keyCode 13 is the enter key to submit query */
		if (event.keyCode == 13) {
			var query = this.value;
			var key = "nmOZO57rlOBgdFTyv1k4OAiL2g8inkYx";
			var url = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + key + "&limit=6";
			$.getJSON(url, function(json) {
				
				/* memory game */
				
				// need two copies of each image in a list
				var cards = [];
				var count = 100;
                var countdown = function(){
                    if (count <= 0) clearInterval(countdownInterval);
                    document.getElementById('counting').innerHTML = count;
                
                        console.log(count);
                    count--;
                    if(count == 0){
                    document.getElementById("game").style.display = "none"
                    }
                
                };
                var countdownInterval = setInterval(countdown, 500);
//                if(count < 0 || count == 0){
//        document.getElementById("game").style.display = "none";
//            }
				// place image into a grid
				// obscure images
				var $game = $('#game');
				var matches = 2;
				for (let j = 0; j < matches; j++) {
					for (let i = 0; i < json.data.length; i++) {
						var img = json.data[i];
						var div = $('<div>')
							.addClass('card')
							.attr('data-num', i);
						var imgElem = new Image();
						imgElem.src = img.images.downsized.url;
						imgElem.style.display = "none";
						div.append(imgElem);
						cards.push(div);
					}
				}
				cards.sort(function() { return 0.5 - Math.random() });
				for (let i = 0; i < cards.length; i++) {
					$game.append(cards[i]);
				}
					 
				var clickedCards = [];
                var score = 0;
                var trial = 0;
				// each card/image needs clicks event
				$('.card').click(function() {
					const $card = $(this);
					// reveal images
					$card.children().fadeIn(2000);
                    
					// is there another image to compare
					console.log(clickedCards.length, matches);
					if (clickedCards.length == matches - 1) {
						// compare images
						var allMatch = true;
						for (let i = 0; i < clickedCards.length; i++) {
							if (clickedCards[i].num != $card.data().num) {
								allMatch = false;
							}
						}
						if (allMatch) {
							// match, stay face up
							console.log("this is a match");
                          
							// if all matches game is won
                            score++;
                            $('#score').text('Number of matches ' + score)
                            
                            if  (score == cards.length/2){
                                $('#score').text('Congrationgulations! YOU WON !!')
                            }
                            
                            
						} else {
							// not a match, hide the images
							$card.children().delay(500).hide(0);
							for (let i = 0; i < clickedCards.length; i++) {
								clickedCards[i].img.delay(500).hide(0);
							}
                            trial++;
                            $('#trial').text('Number of tries ' + trial)
                            
						}
                       
                        
						// clear the current image
						clickedCards = [];
					} else {
						// keep track of current image
						clickedCards.push({
							num: $card.data().num,
							img: $card.find('img')
						});
					}
                
				});
					
			});
		}
	});
});