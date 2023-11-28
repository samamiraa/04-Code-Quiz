function viewHighScore() {
       var nameInput = localStorage.getItem("fname");
       var getScore = localStorage.getItem("scoreValue");

        var listItems = document.createElement("li");
        listItems.innerHTML = nameInput + " " + getScore + " out of 10!";

        var orderedList = document.getElementById("highscores");
        orderedList.appendChild(listItems);
    };

    viewHighScore();