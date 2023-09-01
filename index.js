function chat() {
    var know = {
        "who are you?": "Hi Im am your personal chat bot! Pixie,<br> What is your name master?",
        "Frank": "Hello master Frank!<br> How may I help you?",
        
    }
    var user = document.getElementById("userSpace").value;
    document.getElementById("botResponse").innerHTML = user + "<br>";
    
    if (user in know) {
        document.getElementById("botResponse").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("botResponse").innerHTML = 
        "sorry, i didnt understand <br>"
    }
}