function changeTheme(theme){
    let head = document.getElementsByTagName('head')[0];
    if(theme == "dark"){
        head.innerHTML = " <meta charset='UTF-8'> <meta http-equiv='X-UA-Compatible' content='IE=edge'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <title>Yuvaraj Company</title> <link rel='stylesheet' href='../css/dark-styles.css'> <link rel='stylesheet' href='../css/dark-top-bar.css'>"
    }
    if(theme == "light"){
        head.innerHTML = " <meta charset='UTF-8'> <meta http-equiv='X-UA-Compatible' content='IE=edge'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <title>Yuvaraj Company</title> <link rel='stylesheet' href='../css/style.css'> <link rel='stylesheet' href='../css/top-bar.css'>"
    }
}