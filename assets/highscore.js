function viewHighScores() {
       // Gets name from local storage
       var nameInput = localStorage.getItem("fname");
       // Gets score from local Storage
       var getScore = localStorage.getItem("scoreValue");

        var listItems = document.createElement("li");
        listItems.innerHTML = nameInput + getScore + " out of 10!";

        var orderedList = document.getElementById("highscores");
        orderedList.appendChild(listItems);
    };

    viewHighScores();