$(document).ready(function () {

    //getting option from dropdown list

    $("select").change(function () {
            var str = "";
            const num = this.id;
            $("select option:selected").each(function () {});
            var query = this.value;
            var key = "kAv1sgh2zjMEG6nofwfLcu5pA55n4LEO";
            var url = "https://api.giphy.com/v1/gifs/search?q=" +
                query +
                "&api_key=" +
                key +
                "&limit=1";
            console.log(url);
            $.getJSON(url, function (json) {
                for (let i = 0; i < json.data.length; i++) {
                    const img = json.data[i];
                    const imgElem = $('<img>')
                        .attr('src', img.images.downsized.url);
                    $('#gif' + num).append(imgElem);
                }
            });
        })
        .trigger("change");
});

//audio 

$(document).ready(function () {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'audio/Elevatormusic.mp3');
    var audioElement2 = document.createElement('audio');
    audioElement2.setAttribute('src', 'audio/song2.mp3');

    //play button 
    $('#play').click(function () {
        audioElement.play();

    });
    //change button
    $('#change').click(function () {
        audioElement.pause();
        audioElement2.play();
    });
});
//end of audio section
