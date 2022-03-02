import somar from './somar.js'
import subtrair from './subtrair.js'
import multiplicar from './multiplicar.js'
import dividir from './dividir.js'

inicio()

function inicio() {
    let opcao = parseInt(prompt(
        '************ MENU *************\nDigite 1 para Soma\nDigite 2 para Subtrair\nDigite 3 para Multiplicar\nDigite 4 para Dividir'
    ))
    while (opcao < 1 || opcao > 4) {
        alert("Por favor digite umas das opções disponivel no menu principal")
        inicio()
    }
    calc(opcao)
}

function calc(opcao) {
    let operador1 = parseInt(prompt("digite o operador 1"))
    let operador2 = parseInt(prompt("digite o operador 2"))
    switch (opcao) {
        case 1:
            display(somar(operador1, operador2))
            break;
        case 2:
            display(subtrair(operador1, operador2))
            break;
        case 3:
            display(multiplicar(operador1, operador2))
            break;
        case 4:
            display(dividir(operador1, operador2))
            break;
        default:
            break;
    }

}

function display(resultado) {
    document.querySelector('.box').innerText = resultado
}

const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    document.location.reload(true)
})

