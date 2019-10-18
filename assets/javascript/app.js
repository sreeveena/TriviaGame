$(document).ready(function(){
    var myQuestions = [
        {
            question: "In A Bug's Life, the bugs that Flik mistakes for warriors actually worked where?",
            answers: ['The theater', 'The circus', 'The mall', 'The farm'],
            correctAnswer: '1',
        },
        {
            question: "In Toy Story 2, what's the name of the 1950s puppet show in which Woody was the star?",
            answers: ['The Woody hour', 'Cowboy hour', 'Woody and the gang', 'Woody roundup'],
            correctAnswer: '3',
        },
        {
            question: "When Monsters, Inc. opens up, who's the top scarer at the company?",
            answers: ['Mike', 'Sulley', 'Randall', 'Frank McCay'],
            correctAnswer: '1',
        },
        {
            question: "In The Incredibles, what's Frozone's actual first name?",
            answers: ['Lucas', 'Lewis', 'Lucius', 'Loomis'],
            correctAnswer: '2',
        },
        {
            question: "In Cars, the Piston Cup is being held at what venue?",
            answers: ['Los Angeles International Speedway', 'Daytona International Speedway', 'Texas Motor Speedway', 'Talladega Superspeedway'],
            correctAnswer: '0',
        },
        {
            question: "In WALL-E, what does EVE visit Earth in search of?",
            answers: ['Oil', 'Plant life', 'Friendship', 'Anything of value'],
            correctAnswer: '1',
        },
        {
            question: "In Up, where is Paradise Falls located?",
            answers: ['Costa Rica', 'Chile', 'Guatemala', 'Venezuela'],
            correctAnswer: '3',
        },
        {
            question: "Which character doesn't make an appearance in Toy Story 3?",
            answers: ['Slinky', 'Bo Peep', 'Rex', 'Mrs.Potato head'],
            correctAnswer: '1',
        },
        {
            question: "In Cars 2, where is the first race of the World Grand Prix held?",
            answers: ['London', 'Hong Kong', 'Tokyo', 'Paris'],
            correctAnswer: '2',
        },
        {
            question: "What's the name of Monsters University's rival school in Monsters University?",
            answers: ['Fear University', 'Scare Tech', 'Scare State', 'Fear Tech'],
            correctAnswer: '3',
        },


    ];

var correctAnswers = 0;
var inCorrectAnswers = 0;
var unAnswered = 0;
var timeRemaining = 120;
var intervalId;
var correct;
var question;
function startGame(){
    $(".start").remove();
    correctAnswers = 0;
    inCorrectAnswers = 0;
    unAnswered = 0;
    timeRemaining = 120;
    
    // $("#questions").text(myQuestions[0].question);
    for(var i=0; i<myQuestions.length; i++){
        question = $("<p style='font-size: 1.5em'>" + myQuestions[i].question + "</p>");
        $("#questions").append(question);
        for( var j=0; j< myQuestions[i].answers.length; j++){
            option = $("<input type='radio' name='option"+j+"'>" + myQuestions[i].answers[j]);
            $("#questions").append(option);
        }
    }
   
}

function timer(){
    if(timeRemaining === 0){
       $(".correctAns").append("<h4>Correct Answers :" + correctAnswers + "</h4>");
       $(".inCorrectAns").append("<h4> In Correct Answers :" + inCorrectAnswers + "</h4>");
       $(".unAns").append("<h4>Un Answered :" + unAnswered + "</h4>");

    }

}
$(".start").on("click", startGame);
});
