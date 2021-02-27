function changeProPicture(picture){
    let profilePicture = document.getElementById('profilePicture');
    if(picture == "boy"){
        profilePicture.innerHTML = "<img src = '../images/profile-boy.png' class = 'icon' />";
    }
    if(picture == "girl"){
        profilePicture.innerHTML = "<img src = '../images/profile-girl.png' class = 'icon' />";
    }
}