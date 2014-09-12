var guessNum
var previousGuess = 0;

var HotOrCold = {

    randomNumber: function() {
        randomNumber = Math.floor(Math.random() * 100);
        // alert(randomNumber);
    },

    validation: function() {
        guessNum = parseInt($('#guess').val(), 10);
        console.log(guessNum);
        if (guessNum === '' || guessNum === ' ' || isNaN(guessNum)) {
            $('.info').text('Please type in a valid number between 0 and 100.').animate({
                                                                                 top: "+=10",
                                                                                 },600, function() {
                                                                                    $( this ).animate({top: "-=10"});
                                                                                 });
             $('#guess').val("");

            return false;
        } else { return true
         }
    },

    compareEntry: function() {
            
            // var guessNum = $('#guess').val();
            // Convert guess value to an integer for comparison
            // guessNum = parseInt(guessNum, 10);
            if(HotOrCold.validation()){
               if(guessNum === randomNumber) {
                    $('.info').text("Bravo!!! You are a Genius").animate({
                                                                     top: "+=10",
                                                                     },600, function() {
                                                                        $( this ).animate({top: "-=10"});
                                                                     });
    ;
    }
                else {
                    var distanceFromPrevious = Math.abs(previousGuess - randomNumber);
                    var distanceFromCurrent = Math.abs(guessNum - randomNumber);
                    console.log('Doing almighty comparison');
                    
                    if(distanceFromPrevious > distanceFromCurrent) {
                        $('.info').text("Getting Hotter, try again").animate({
                                                                         top: "+=10",
                                                                         },600, function() {
                                                                            $( this ).animate({top: "-=10"});
                                                                         });

                        $('#guess').val("");
                        //alert("Getting Hotter");
                        previousGuess = guessNum;
                    }

                    else {
                        $(".info").text("Getting Colder. You can do better").animate({
                                                                             top: "+=10",
                                                                             },600, function() {
                                                                                $( this ).animate({top: "-=10"});
                                                                             });


                        $('#guess').val("");
                        //alert ("Getting Colder");
                        previousGuess = guessNum;
                    }
                }
            }
   },


    // Bind a click of the reset button to browser reload//
    restart: function() {
        event.preventDefault();
       location.reload();
    },

    initialize: function() {
    $('#submit_button').click(HotOrCold.compareEntry);
    $('#newgame_button').click(HotOrCold.restart);
    HotOrCold.randomNumber();
    }
    };
// $(document).ready(HotOrCold.randomNumber);
$(document).ready(HotOrCold.initialize);


