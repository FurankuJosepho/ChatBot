function chat() {
    var know = {
        "Who are you?": "Hi Im am your personal chat bot! Pixie,<br> What is your name master?",
        "Frank": "Hello master!<br> How may I help you?",
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
    alert ("Hello, Master Im Ashbourne your personal chatbot");

    var name = prompt ("What is your name?");
    const yourAnswers = prompt ("How may I help you " + name + "?");
    if (yourAnswers == "I want to talk") {
        var talkBot = prompt ("What do you want to talk about Master?");
        if (talkBot == "Relationship") {
            var talk = prompt ("Hows your relationship with other?")
            if (talk == "Not good", "Bo bad", "Bad", "Not as good it should be", "Sad", "Very sad") {
                alert ("Communication, respect, trust, quality time, independence, and effective conflict resolution are essential components of a healthy and fulfilling relationship.")
            } 
            else if (talk == "Good", "Not bad", "Not so bad", "The best", "Happy Life", "Happy", "Very Happy") {
            var positiveRelation = prompt ("Keep up on having a good relationship with others Master Frank I your personal chat bot commended you for being the best person!")
            }
        } 
        else {
            alert ("Thank you for coming Master Frank!")
        }
    } 
    else {
        alert ("Thank you for coming Master Frank!")
    }
}
document.getElementById("Ashborn").onclick = ashBourne;