$(document).ready(function() {
    var winCount = 0;
    var winCountE = document.getElementById("win-count");
    var lossCount = 0;
    var lossCountE = document.getElementById("loss-count");
    var crystal1 = document.getElementById("crystal-one");
    var crystal2 = document.getElementById("crystal-two");
    var crystal3 = document.getElementById("crystal-three");
    var crystal4 = document.getElementById("crystal-four");
    var totalScore = 0;
    var totalScoreE = document.getElementById("total-score");

    // random-number is held by random-number-box and is a random number generated after a win or loss scenario
    // is a number between 19 and 120
    var randomNumber = Math.floor(Math.random() * 102) + 19;
    console.log("random number is " + randomNumber);

    // this is taking the random-number element and making it a variable so that it may be rewritten
    var randomNumberE = document.getElementById("random-number");

    // this will replace the 0 in the random-number box w the number created by randomNumber
    randomNumberE.innerText = randomNumber;
    

    // win-count counts wins and will replace the 0 in the HTML
    winCountE.innerText = winCount;

    // loss-count counts losses and will replace the 0 in the HTML
    lossCountE.innerText = lossCount;


    // crystal-one crystal-two crystal-three crystal-four each will have a random hidden value between 1 and 12
    var value1 = Math.floor(Math.random() * 11) + 1;
    console.log("crystal one is worth " + value1);

    var value2 = Math.floor(Math.random() * 11) + 1;
    console.log("crystal two is worth " + value2);

    var value3 = Math.floor(Math.random() * 11) + 1;
    console.log("crystal three is worth " + value3);

    var value4 = Math.floor(Math.random() * 11) + 1;
    console.log("crystal four is worth " + value4);


    $("#crystal-one").on('click', function(e) {
        totalScore += value1;
        console.log("the total is " + totalScore);
    })

    // total-score counts the crystal total and will replace the 0 in the HTML
    totalScoreE.innerText = totalScore;
    console.log("the total score is " + totalScore);

})