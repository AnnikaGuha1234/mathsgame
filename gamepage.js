player1_score=0;
player2_score=0;
player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");


document.getElementById("player1name").innerHTML= player1_name;
document.getElementById("player2name").inerHTML=player2_name;

document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn -" + player1_name;
document.getElementById("player_answer").innerHTML="Answer turn -" + player2_name;

function send(){
    n1=document.getElementById("noone").Value;
    n2=document.getElementById("notwo").Value;
    answer=n1+n2
    console.log("answer")
    
    question_word="<h4 id='word_display'>Question "+ n1+n2+"</h4>";
    inputbox="<br>Answer : <input type='text' id=input_check_box>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row= question_word + inputbox + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById(n1+n2).value = "";
}
question_turn="player2_name";
answer_turn="player1_name";

function check(){
    
useranswer=document.getElementById("submit_button").value;
        answer=get_answer.toLowerCase();
        if(answer==useranswer){
            player1_score=player1_score+1;
    document.getElementById("player1score").innerHTML=player1_score;
        }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2score").innerHTML=player2_score
    }
    if(question_turn==player2_name){
        question_turn=player1_name;
        document.getElementById("player_question").innerHTML="question_turn"+player1_name;
    }
    else{
        question_turn=player2_name;
        document.getElementById("player_question").innerHTML="question_turn"+player2_name;
    }
    if (answer_turn=player1_name){
        answer_turn=player2_name;
        document.getElementById("player_answer").innerHTML="aswer_turn"+player2_name;
    }
    else{
        answer_turn=player1_name;
        document.getElementById("player_answer").innerHTML="answer_turn"+player1_name;
    }
    document.getElementById("output").innerHTML="";
    }

