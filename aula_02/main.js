// Mesa = 07: Belicio Cardoso, Willian Cruz, Felipe Rocha, Willian Almeida e Veronica Rizzi

let bot = parseInt(Math.random() * 3 + 1)
var botWin = 0
var userWin = 0

function jogar(opcaoUser) {

    if (opcaoUser < 1 || opcaoUser > 3 || opcaoUser == "") {
        alert('Digitou o numero errado')
    } else {
        if (bot === opcaoUser) {
            alert('Empatou')
            opcaoUser = parseInt(prompt('1- Pedra, 2- Tesoura, 3- Papel'))
        } if (bot === 1 && opcaoUser === 2 || bot === 3 && opcaoUser === 1 || bot === 2 && opcaoUser === 3) {
            botWin = botWin + 1
            alert('Bot Ganhou ' + botWin + ' vezes')
            
        } else {
            userWin = userWin + 1
            alert('User Ganhou ' + userWin + ' vezes')
        }
    }
    opcaoUser = 0
}

 console.log(userWin, botWin)

while (userWin !== 2 || botWin !== 2) {
    let opcaoUser = parseInt(prompt('1- Pedra, 2- Tesoura, 3- Papel'))
    jogar(opcaoUser)
}


 

alert("Fim do jogo")