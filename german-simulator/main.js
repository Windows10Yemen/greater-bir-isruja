let game = {
    german: new Decimal(0)
}

function runFunction(a) {
    if (a.gte("eee761")) {
        console.error("error, limit is eee761");
    } else {
        return a
    }
}

const saveDataProgram = () => {
    //localStorage.german = "0 |" wont work
}

function loadFromSave() {
    //game.german = new Decimal(localStorage.getItem("german"))
}

function changeFont(fontID) {
    switch (fontID) {
        case 1:
            document.querySelector(".font").href = "roboto.css"
            break;
        case 2:
            document.querySelector(".font").href = "ubuntu-lineux.css"
            break
        case 3:
            document.querySelector(".font").href = "venezuela.css"
            break
        case 4:
            document.querySelector(".font").href = "armenia.css"
            break
    
        default:
            break;
    }
}

function clickme() {
    game.german = game.german.add(1)
}

setInterval(() => {
    document.querySelector(".clicker").innerHTML = `you havia ${runFunction(game.german)} perken`
}, 100);