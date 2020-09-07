function relationGame(userChoosed) {

    console.log(userChoosed.id);

    var userChoice, botChoice;

    var userStatus = document.querySelector('#user');
    var botStatus = document.querySelector('#bot')

    var botMgsH2 = document.querySelector('#botMgsH2');
    var botMgsP = document.querySelector('#botMgsP');

    userChoice = userChoosed.id;

    botChoice = randIntToChoice(randomInt());
    console.log(botChoice);

    userStatus.innerHTML = "You're <span>" + userChoice + "</span> & ";
    botStatus.innerHTML = " I'm <span>" + botChoice + "</span>";

    if (userChoice == "single") {
        if (botChoice == "single") {
            botMgsH2.innerHTML = "Yooo Bro! We're Same."
            botMgsP.innerHTML = "Chal bhai dosti karte hai apun"
        } else {
            botMgsH2.innerHTML = "HAHA! I'm laughing at you."
            botMgsP.innerHTML = "Bsdk tu akela hi marega :D"
        }
    } else if (userChoice == "inRelationship") {
        if (botChoice == "inRelationship") {
            botMgsH2.innerHTML = "Yooo Bro! We're Same."
            botMgsP.innerHTML = "Let's be friends"
        } else {
            botMgsH2.innerHTML = "We are not Same bro"
            botMgsP.innerHTML = "Bsdk door hoja meri najro se :D"
        }
    }

    document.querySelector('.program-footer').innerHTML = 'Simple random status comparison program btwn user & bot, By Subhash';
}

function randomInt() {
    return Math.floor(Math.random() * 2);
}

function randIntToChoice(number) {
    return ['single', 'inRelationship'][number];
}