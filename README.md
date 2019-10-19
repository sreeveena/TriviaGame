# TriviaGame

Technologies used:
HTML
CSS
JAVASCRIPT
Jquery

This assignment has one HTML page, one javascript file and one CSS file:
1. index.html
2. app.js
3. style.css

In this Trivia game the player has to click on start button and have to answer the ten trivia questions with radio button answers
with limited amount of time to finish the quiz. The game ends when the time runs out or clicked on Done button. The page will reveal the number of questions that players answer correctly, incorrectly and unanswered.


In index page the following is the body block 
'''
<body>
    <div class="main">
        <h1>Pixar Movie Trivia!</h1>
        <button class="start">Start</button>
        <div class="timeRemaining"></div>
        <div id="questions"></div>
        <div class="done"></div>
        <div class="correctAns"></div>
        <div class="inCorrectAns"></div>
        <div class="unAns"></div>
        <!-- jQuery -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <!-- Script -->
        <script type="text/javascript" src="./assets/javascript/app.js"></script>
    </div>
'''
In javascript file  has multiple functions.
The following function will decrement the time remaining every one second.
    and clears time if the timer reaches to 0 and calls the function timer.
'''
function timeRemaining(){
    $(".timeRemaining").text("Time Remaining :" + timeRemain );
    timeRemain--;
    if(timeRemain == 0){
        clearInterval(intervalId);
        timer();
    }
}
'''

Function startGame will remove start button on click of html with  class= start and will reveal the trivia questions and options for answers set the values correctAnswers, inCorrectAnswers, unAnswered and timeremaining to default values
screenshot of the page.
'''
function startGame(){
    $(".start").remove();
    correctAnswers = 0;
    inCorrectAnswers = 0;
    unAnswered = 0;
    timeRemain = 60;
    $(".timeRemaining").text("Time Remaining :" + timeRemain );
    intervalId = setInterval(timeRemaining, 1000);
    for(var i=0; i<myQuestions.length; i++){
        question = $("<p style='font-size: 1.5em'>" + myQuestions[i].question + "</p>");
        $("#questions").append(question);
        for( var j=0; j< myQuestions[i].answers.length; j++){
            option = $("<input type='radio' name='option"+i+"' value= '"+myQuestions[i].answers[j]+"'>");
            value = $( "<p class='answer'>" + myQuestions[i].answers[j] +"</p>");
            $("#questions").append(option, value);
        }
    }
   doneButton = $("<br><button id= 'done'> Done </button>");
   $("#questions").append(doneButton);
   $("#done").on("click",timer);
}
'''

function will check the value of the radio button selected by the user and compare with the correct answer value
'''
function results(){
    for(var i=0; i< myQuestions.length; i++){
         var radioValue = $("input[name='option"+i+"']:checked").val();
        // console.log(myQuestions[i].correctAnswer);
        // console.log(radioValue);
         
        if(typeof radioValue == 'undefined'){
            unAnswered++;
       }else if(radioValue == myQuestions[i].correctAnswer){
        correctAnswers++;
        } else{
        inCorrectAnswers++;
        }
    }
}
'''

function timer will clear the timer and questions and will display All Done! with number of correct answers, in correct answers and un answered questions using results function.
'''
function timer(){
    clearInterval(intervalId);
    results();
    $(".timeRemaining").remove();
    $("#questions").remove();
    $(".done").append("<h4 style= 'font-size:2em'> All Done!</h4>");
    $(".correctAns").append("<h4>Correct Answers :" + correctAnswers + "</h4>");
    $(".inCorrectAns").append("<h4> Incorrect Answers :" + inCorrectAnswers + "</h4>");
    $(".unAns").append("<h4>Unanswered :" + unAnswered + "</h4>"); 
}
'''

index.html

![image](https://user-images.githubusercontent.com/7834767/67138081-7a236e00-f1f3-11e9-9565-13b56233846b.png)


![image](https://user-images.githubusercontent.com/7834767/67138090-91faf200-f1f3-11e9-8745-2e18af16c872.png)

![image](https://user-images.githubusercontent.com/7834767/67138104-b48d0b00-f1f3-11e9-9aa7-12ac622984f2.png)

![image](https://user-images.githubusercontent.com/7834767/67138106-b8b92880-f1f3-11e9-912c-e1f9fc00e52c.png)

![image](https://user-images.githubusercontent.com/7834767/67138107-bb1b8280-f1f3-11e9-8b0f-14f02fac25c9.png)

