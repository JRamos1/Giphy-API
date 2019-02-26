
  var games = ["hangman", "tetris", "scrabble", "minesweeper"];
  console.log(games);

  for (var i = 0; i < games.length; i++) {
    var buttonDiv = $("<div>");
    var gifButton = $("<button>");
    gifButton.addClass("games");
    gifButton.addClass("btn btn-primary");
    gifButton.attr("data-name", games[i]);
    gifButton.text(games[i]);
    buttonDiv.append(gifButton);
    $("#display-buttons").append(buttonDiv);
  }
  console.log(gifButton);
  

  $(document).on("click", ".games", displayGifs);

   function displayGifs(){
    var game = $(this).attr("data-name");
    console.log(game);
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      game +
      "&api_key=pQR5GbOc9YM6002bEqi5KVCiUyO758Pu&limit=10";

      $("#gifs-here").empty();

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then (function (response) {
      var results = response.data;
      console.log(results);

      for (var i = 0; i < results.length; i++) {
        var gamesDiv = $("<div>");
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var gameImage = $("<img>");
        gameImage.attr("src", results[i].images.fixed_height.url);
        gamesDiv.append(p);
        gamesDiv.append(gameImage);
        console.log(response);

        $("#gifs-here").prepend(gamesDiv);
      }
    });
  };
