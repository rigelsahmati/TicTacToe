var button = document.querySelectorAll('button');
var text = document.getElementById('display');
var scoreHolder = document.querySelectorAll('h2')
var playerTurn = 1;
var activeBtn;
var plwin = 1
var plwin2 = 1
function restart() {
    button[0].removeAttribute('disabled')
    button[1].removeAttribute('disabled')
    button[2].removeAttribute('disabled')
    button[3].removeAttribute('disabled')
    button[4].removeAttribute('disabled')
    button[5].removeAttribute('disabled')
    button[6].removeAttribute('disabled')
    button[7].removeAttribute('disabled')
    button[8].removeAttribute('disabled')
    button[0].innerHTML = ''
    button[1].innerHTML = ''
    button[2].innerHTML = ''
    button[3].innerHTML = ''
    button[4].innerHTML = ''
    button[5].innerHTML = ''
    button[6].innerHTML = ''
    button[7].innerHTML = ''
    button[8].innerHTML = ''
}
function newGame() {
    restart()
    plwin = 1
    plwin2 = 1
    scoreHolder[0].innerHTML = '';
    scoreHolder[1].innerHTML = '';
}
function win() {
    if (playerTurn === 1) {
        if (button[0].innerHTML == '✖' && button[1].innerHTML == '✖' && button[2].innerHTML == '✖' ||
            button[3].innerHTML == '✖' && button[4].innerHTML == '✖' && button[5].innerHTML == '✖' ||
            button[6].innerHTML == '✖' && button[7].innerHTML == '✖' && button[8].innerHTML == '✖' ||
            button[0].innerHTML == '✖' && button[3].innerHTML == '✖' && button[6].innerHTML == '✖' ||
            button[1].innerHTML == '✖' && button[4].innerHTML == '✖' && button[7].innerHTML == '✖' ||
            button[2].innerHTML == '✖' && button[5].innerHTML == '✖' && button[8].innerHTML == '✖' ||
            button[0].innerHTML == '✖' && button[4].innerHTML == '✖' && button[8].innerHTML == '✖' ||
            button[2].innerHTML == '✖' && button[4].innerHTML == '✖' && button[6].innerHTML == '✖') {
            button[0].setAttribute('disabled', '')
            button[1].setAttribute('disabled', '')
            button[2].setAttribute('disabled', '')
            button[3].setAttribute('disabled', '')
            button[4].setAttribute('disabled', '')
            button[5].setAttribute('disabled', '')
            button[6].setAttribute('disabled', '')
            button[7].setAttribute('disabled', '')
            button[8].setAttribute('disabled', '')
            text.innerHTML = "Player 1 Wins";
            scoreHolder[0].innerHTML = plwin;
            plwin += 1
            playerTurn = 2
            setTimeout(() => {
                text.innerHTML = ""
            }, "1000")
            setTimeout(restart, 1000)
            return true


        }
    }
    if (playerTurn === 2) {
        if (button[0].innerHTML == '⭕' && button[1].innerHTML == '⭕' && button[2].innerHTML == '⭕' ||
            button[3].innerHTML == '⭕' && button[4].innerHTML == '⭕' && button[5].innerHTML == '⭕' ||
            button[6].innerHTML == '⭕' && button[7].innerHTML == '⭕' && button[8].innerHTML == '⭕' ||
            button[0].innerHTML == '⭕' && button[3].innerHTML == '⭕' && button[6].innerHTML == '⭕' ||
            button[1].innerHTML == '⭕' && button[4].innerHTML == '⭕' && button[7].innerHTML == '⭕' ||
            button[2].innerHTML == '⭕' && button[5].innerHTML == '⭕' && button[8].innerHTML == '⭕' ||
            button[0].innerHTML == '⭕' && button[4].innerHTML == '⭕' && button[8].innerHTML == '⭕' ||
            button[2].innerHTML == '⭕' && button[4].innerHTML == '⭕' && button[6].innerHTML == '⭕') {
            button[0].setAttribute('disabled', '')
            button[1].setAttribute('disabled', '')
            button[2].setAttribute('disabled', '')
            button[3].setAttribute('disabled', '')
            button[4].setAttribute('disabled', '')
            button[5].setAttribute('disabled', '')
            button[6].setAttribute('disabled', '')
            button[7].setAttribute('disabled', '')
            button[8].setAttribute('disabled', '')
            text.innerHTML = "Wlayer 2 Wins"
            scoreHolder[1].innerHTML = plwin2;
            plwin2 += 1
            playerTurn = 1
            setTimeout(() => {
                text.innerHTML = ""
            }, "1000")
            setTimeout(restart, 1000)
            return true
        }
    }
    draw()

}
function draw() {
    if (button[0].innerHTML != '' && button[1].innerHTML != '' && button[2].innerHTML != '' && button[3].innerHTML != '' && button[4].innerHTML != '' && button[5].innerHTML != '' && button[6].innerHTML != '' && button[7].innerHTML != '' && button[8].innerHTML != '') {
        text.innerHTML = "DRAW!"
        setTimeout(() => {
            text.innerHTML = ""
        }, "1000")
        setTimeout(restart, 1000)
    }
}
function palayer() {

    if (playerTurn === 1) {
        activeBtn.style.color = "#8b1a1a";
        activeBtn.innerHTML = '✖'
        win();
        activeBtn.setAttribute('disabled', '')
        playerTurn = 2;
    }
    else if (playerTurn === 2) {
        activeBtn.style.color = "#066647";
        activeBtn.innerHTML = '⭕'
        win();
        activeBtn.setAttribute('disabled', '')
        playerTurn = 1;
    }
}
button[0].addEventListener('click', () => (activeBtn = button[0], palayer()))
button[1].addEventListener('click', () => (activeBtn = button[1], palayer()))
button[2].addEventListener('click', () => (activeBtn = button[2], palayer()))
button[3].addEventListener('click', () => (activeBtn = button[3], palayer()))
button[4].addEventListener('click', () => (activeBtn = button[4], palayer()))
button[5].addEventListener('click', () => (activeBtn = button[5], palayer()))
button[6].addEventListener('click', () => (activeBtn = button[6], palayer()))
button[7].addEventListener('click', () => (activeBtn = button[7], palayer()))
button[8].addEventListener('click', () => (activeBtn = button[8], palayer())) 
