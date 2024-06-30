// Get the button element by its ID
const showAnswerButton = document.getElementById("showAnswerButton");

// Get the answer div by its ID
const answerDiv = document.getElementById("answer");

// Add an event listener to the button
showAnswerButton.addEventListener("click", function() {
    // Remove the 'hidden' class to show the answer
    answerDiv.classList.remove("hidden");
    
    // Optionally, you can disable the button after showing the answer
    showAnswerButton.disabled = true;
});
