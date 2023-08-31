const scoreBtn = document.getElementsByClassName('score');
const submitBtn = document.getElementById("submit-btn");

function removeSelected() {
    for(var i=0; i<scoreBtn.length; i++) {
        scoreBtn[i].classList.remove("selected");
    }
}

for(var i=0; i<scoreBtn.length; i++) {
    scoreBtn[i].addEventListener("click", function(event) {
        // remove all selected
        removeSelected();
        var curElement = event.target;
        curElement.classList.add("selected");
    });
}

submitBtn.addEventListener("click", function() {
    const selectedRate = document.getElementsByClassName("selected")[0];
    if(!selectedRate) {
        alert("Please select a rate.");
        return;
    }

    const ratingCard = document.getElementById("rating-state");
    ratingCard.style.display = "none";

    const thankyouCard = document.getElementById("thankyou-state");
    thankyouCard.style.display = "flex";


    const score = document.getElementsByClassName("selected-score")[0];
    score.innerHTML = selectedRate.textContent;
})