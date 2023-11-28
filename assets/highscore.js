// Function to viewHighScore
function viewHighScore() {
    // Gets items from localStorage
       var nameInput = localStorage.getItem("fname");
       var getScore = localStorage.getItem("scoreValue");

    //    Creates list element
        var listItems = document.createElement("li");
        // Adds data from local storage
        listItems.innerHTML = nameInput + " " + getScore + " out of 10!";

        // DOM element
        var orderedList = document.getElementById("highscores");
        // Appends listItems to orderedList
        orderedList.appendChild(listItems);
    };

    // Calls function to run
    viewHighScore();