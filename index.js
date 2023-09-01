function chat() {
    var know = {
        "who are you?": "Hi Im am your personal chat bot! Pixie,<br> What is your name master?",
        "Frank": "Hello master Frank!<br> How may I help you?",
        "I want to talk to you": "I'm sorry master Frank <br> I cant talk to you but <br> you call talk to my Brother",
        "How?": "Please click the button below",
        "Ok Thank you, Pixie!": "Your always welcome master Frank"
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

function ashBourne() {
    alert ("Hello, Master Frank Im Ashbourne your personal chatbot");

    const yourAnswers = prompt ("How may I help you Master Frank?")
}
document.getElementById("Ashborn").onclick = ashBourne;