var myData;
var myPoster;

function getPoster() {
    var film = $('#movietitle').val();
    if (film == '') {
        $('#myerror').html('<h2>Please enter a movie/ tv show!</h2>');
        $('#poster').empty();
        $('#movieData').empty();
    } else {
        $('#myerror').html("<h2>loading...</h2>");
        $.getJSON('http://www.omdbapi.com/?t=' + film, function(myData) {
            console.log(myData);
            myPoster = 'http://img.omdbapi.com/?i=' + myData.imdbID + '&apikey=4fc0b655';
            if (myData.Error != "Nothing found!" && myData.Poster != "N/A" && myData.Response != "False") {
                $('#poster').html('<img src=' + myPoster + '>');
                $('#movieData').html('<i class="film icon"></i>' + myData.Title +
                    '<br><br><i class="icon users"></i>' + myData.Actors +
                    '<br><br><i class="calendar outline icon"></i>' + myData.Year +
                    '<br><br><i class="wait icon"></i>' + myData.Runtime +
                    '<br><br><i class="icon text file"></i>' + myData.Plot);
                $('#myerror').empty();
            } else {
                $('#myerror').html('<h2>Sorry! Nothing found!</h2>');
                $('#poster').empty();
                $('#movieData').empty();
            }
        });
    }
}

$('#search').click(getPoster);
$('#movietitle').keyup(function(event) {
    if (event.keyCode == 13) {
        getPoster();
    }
});
