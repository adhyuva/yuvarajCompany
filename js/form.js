function ifLoop () {
    let question1 = document.getElementById("bytes").value;
    let one = document.getElementById("one");
    let question2 = document.getElementById("bytes-2").value;
    let two = document.getElementById("two");
    let question3 = document.getElementById("ten").value;
    let three = document.getElementById("three");
    if(question1 == "1024"){
        one.innerHTML="<font color='green'>CORRECT!</font>";
    }else if (question1 == ""){
        one.innerHTML="<font color='gray'>Nothing Written.</font>"
    }else{
        one.innerHTML="<font color='red'>INCORRECT!</font>";
      }
    if(question2 == "1024"){
        two.innerHTML="<font color='green'>CORRECT!</font>";
    }else if (question2 == ""){
        two.innerHTML="<font color='gray'>Nothing Written.</font>"
    }else{
        two.innerHTML="<font color='red'>INCORRECT!</font>";
    }
    if(question3 == "4"){
        three.innerHTML="<font color='green'>CORRECT!</font>";
    }else if (question3 == ""){
        three.innerHTML="<font color='gray'>Nothing Written.</font>"
    }else{
        three.innerHTML="<font color='red'>INCORRECT!</font>";
    }

}