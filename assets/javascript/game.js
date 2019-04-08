$(document).ready(function() {
    var winCount = 0;
    var lossCount = 0;
    var totalScore = 0;

    // random-number is held by random-number-box and is a random number generated after a win or loss scenario
    // is a number between 19 and 120
    var randomNumber = Math.floor(Math.random() * 102) + 19;
    console.log("random number is " + randomNumber);

    // this will replace the 0 in the random-number box w the number created by randomNumber
    $('#random-number').text(randomNumber);
    

    // // win-count counts wins and will replace the 0 in the HTML
    // $('#win-count').text(winCount);

    // // loss-count counts losses and will replace the 0 in the HTML
    // $('#loss-count').text(lossCount);


    // crystal-one crystal-two crystal-three crystal-four each will have a random hidden value between 1 and 12
        var value1 = Math.floor(Math.random() * 11) + 1;
        console.log("crystal one is worth " + value1);

        var value2 = Math.floor(Math.random() * 11) + 1;
        console.log("crystal two is worth " + value2);

        var value3 = Math.floor(Math.random() * 11) + 1;
        console.log("crystal three is worth " + value3);

        var value4 = Math.floor(Math.random() * 11) + 1;
        console.log("crystal four is worth " + value4);


    
    // whenever a crystal is clicked, add the random value of the crystal to the totalScore
        $(".crystal-one").on('click', function(e) {
            totalScore += value1;
            console.log("the total score is " + totalScore);
            $('#total-score').text(totalScore);
            blackJack();
        });

        $(".crystal-two").on('click', function(e) {
            totalScore += value2;
            console.log("the total score is " + totalScore);
            $('#total-score').text(totalScore);
            blackJack();
        });

        $(".crystal-three").on('click', function(e) {
            totalScore += value3;
            console.log("the total score is " + totalScore);
            $('#total-score').text(totalScore);
            blackJack();
        });

        $(".crystal-four").on('click', function(e) {
            totalScore += value4;
            console.log("the total score is " + totalScore);
            $('#total-score').text(totalScore);
            blackJack();
        });

        //this function will run after every click to check if there is a win, loss, or the game continues
    function blackJack() {

        //win
        if (totalScore === randomNumber){
            alert("win ;)");
            winCount++;
            $("#win-count").text(winCount);
            console.log("wins", winCount);
            newSearch();
            resetScore();
        }
        //lose
        else if (totalScore > randomNumber) {
            alert("lose :P");
            lossCount++;
            $("#loss-count").text(lossCount);
            console.log("losses", lossCount);
            newSearch();
            resetScore();
        };
    };

    // this will run within blackJack() to reset the game without refreshing the actual page
    function newSearch() {

        // new randomNumber
        var randomNumber = Math.floor(Math.random() * 102) + 19;
        console.log("random number is " + randomNumber);
        $('#random-number').text(randomNumber);

        // new crystal values
        var value1 = Math.floor(Math.random() * 11) + 1;
        console.log("crystal one is worth " + value1);

        var value2 = Math.floor(Math.random() * 11) + 1;
        console.log("crystal two is worth " + value2);

        var value3 = Math.floor(Math.random() * 11) + 1;
        console.log("crystal three is worth " + value3);

        var value4 = Math.floor(Math.random() * 11) + 1;
        console.log("crystal four is worth " + value4);

    };

    function resetScore() {
        // total-score counts the crystal total and will replace the 0 in the HTML
        var totalScore = 0;
        $('#total-score').text(totalScore);
        console.log("the new total score is " + totalScore);
    };
})