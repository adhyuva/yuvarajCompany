function ifLoop () {
    let question1 = document.getElementById("bytes").value;
    let one = document.getElementById("one");
    let question2 = document.getElementById("ten").value;
    let two = document.getElementById("two");
    let question3 = document.getElementById("bytes-2").value;
    let three = document.getElementById("three");
    let score = 0;
    let output = document.getElementById("score");
    if(question1 == "1024"){
        one.innerHTML="<font color='green'>CORRECT!</font>";
        score += 1; 
    }else if (question1 == ""){
        one.innerHTML="<font color='gray'>Nothing Written.</font>"
    }else{
        one.innerHTML="<font color='red'>INCORRECT!</font>";
      }
    if(question2 == "4"){
        two.innerHTML="<font color='green'>CORRECT!</font>";
        score += 1; 
    }else if (question2 == ""){
        two.innerHTML="<font color='gray'>Nothing Written.</font>"
    }else{
        two.innerHTML="<font color='red'>INCORRECT!</font>";
    }
    if(question3 == "1024"){
        three.innerHTML="<font color='green'>CORRECT!</font>";
        score += 2; 
    }else if (question3 == ""){
        three.innerHTML="<font color='gray'>Nothing Written.</font>";
    }else{
        three.innerHTML="<font color='red'>INCORRECT!</font>";
    }
    output.innerHTML = "Score:" + score + "/4";
    if (score == 4){
        output.innerHTML += " <br/> &#128293; Awesome! You know your facts! &#128293; ";
      }else if (score >= 2){
        output.innerHTML += " <br/> &#128170; Your familiar with binary.&#128170;";
      }else if (question1==""&&question2==""&&question3==""){
        output.innerHTML = " <br/> &#128533;We can not give you a score because everything is blank.&#128533;<br/> Please try again!";
      }else{
        output.innerHTML += " <br/>&#128218; You do not know binary. Study more! &#128218; ";
      }

}