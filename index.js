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
    const yourAnswers = prompt ("How may I help you Master " + name + "?");
    if (yourAnswers == "I want to talk") {
        var talkBot = prompt ("What do you want to talk about Master " + name + "?");
        if (talkBot == "Relationship") {
            var talkingBot = prompt ("Hows your relationship with other?")
            if (talkingBot === "Sad") {
                alert ("Communication, respect, trust, quality time, independence, and effective conflict resolution are essential components of a healthy and fulfilling relationship.")
            } 
            else if (talkingBot === "Happy") {
                var thanks = prompt ("Keep up on having a good relationship with others Master " + name + ", I your personal chat bot commended you for being the best person!")
                if (thanks == "Thanks") {
                    alert ("Your welcome Master " + name + "!")
                }
            }
        } 
        else {
            alert ("Thank you for coming Master " + name + "!" );
        }
    } 
    else {
        alert ("Thank you for coming Master " + name + "!" );
    }
}
document.getElementById("Ashborn").onclick = ashBourne;

var userSpace = document.getElementById("userSpace");
var myText = document.getElementById("myText");
var limits = 150;
myText.textContent = "Character counts " + 0 + "/" + limits;

userSpace.addEventListener("input",function(){
    var letterLength = userSpace.value.length;
    myText.textContent = "Character counts " + letterLength + "/" + limits

    if (letterLength > limits) {
        alert ("Please delete more letters! there is " + letterLength + " characters you are exceeding the limit!!")
    }
});