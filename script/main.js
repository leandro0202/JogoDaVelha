const casas = document.querySelectorAll('.casa')
const res = document.querySelector('.res')
const btn = document.querySelector(".btn")
const jog1 = document.querySelector(".jog1")
const jog2 = document.querySelector(".jog2")
const jogador1 = 'x'
const jogador2 = 'o'

let arrayJogador1 = []
let arrayJogador2 = []
let clique = 0
let pontuação1 = 0
let pontuação2 = 0


function jogada(){  
    for (let i = 0; i < casas.length; i++) {
        casas[i].addEventListener('click', () => {
            if(clique % 2 == 0){
                if (casas[i].classList.contains('jogada')){
                    res.textContent = 'escolha outra casa'
                    clique +=1
                }else {
                    res.textContent = ''
                    casas[i].textContent = jogador1
                    casas[i].classList.add('jogada')
                    arrayJogador1.push(i)
                    if(arrayJogador1.includes(0) && arrayJogador1.includes(3) && arrayJogador1.includes(6)){
                        res.textContent = 'jogador 1 venceu'
                        newGame()
                        pontoJ1()
                    }else if(arrayJogador1.includes(0) && arrayJogador1.includes(1) && arrayJogador1.includes(2)){
                        res.textContent = 'jogador 1 venceu'
                        newGame()
                        pontoJ1()
                    }else if(arrayJogador1.includes(0) && arrayJogador1.includes(4) && arrayJogador1.includes(8)){
                        res.textContent = 'jogador 1 venceu'
                        newGame()
                        pontoJ1()
                    }else if(arrayJogador1.includes(2) && arrayJogador1.includes(4) && arrayJogador1.includes(6)){
                        res.textContent = 'jogador 1 venceu'
                        newGame()
                        pontoJ1()
                    }else if(arrayJogador1.includes(6) && arrayJogador1.includes(7) && arrayJogador1.includes(8)){
                        res.textContent = 'jogador 1 venceu'
                        newGame()
                        pontoJ1()
                    }else if(arrayJogador1.includes(2) && arrayJogador1.includes(5) && arrayJogador1.includes(8)){
                        res.textContent = 'jogador 1 venceu'
                        newGame()
                        pontoJ1()
                    }else if(arrayJogador1.includes(1) && arrayJogador1.includes(4) && arrayJogador1.includes(7)){
                        res.textContent = 'jogador 1 venceu'
                        newGame()
                        pontoJ1()
                    }else if(arrayJogador1.includes(3) && arrayJogador1.includes(4) && arrayJogador1.includes(5)){
                        res.textContent = 'jogador 1 venceu'
                        newGame()
                        pontoJ1()
                    }
                }

            }else{
                if (casas[i].classList.contains('jogada')){
                    res.textContent = 'escolha outra casa'
                    clique +=1
                }else{
                    res.textContent = ''
                    casas[i].textContent = jogador2
                    casas[i].classList.add('jogada')
                    arrayJogador2.push(i)
                    if(arrayJogador2.includes(0) && arrayJogador2.includes(3) && arrayJogador2.includes(6)){
                        res.textContent = 'jogador 2 venceu'
                        newGame()
                        pontoJ2()
                    }else if(arrayJogador2.includes(0) && arrayJogador2.includes(1) && arrayJogador2.includes(2)){
                        res.textContent = 'jogador 2 venceu'
                        newGame()
                        pontoJ2()
                    }else if(arrayJogador2.includes(0) && arrayJogador2.includes(4) && arrayJogador2.includes(8)){
                        res.textContent = 'jogador 2 venceu'
                        newGame()
                        pontoJ2()
                    }else if(arrayJogador2.includes(2) && arrayJogador2.includes(4) && arrayJogador2.includes(6)){
                        res.textContent = 'jogador 2 venceu'
                        newGame()
                        pontoJ2()
                    }else if(arrayJogador2.includes(6) && arrayJogador2.includes(7) && arrayJogador2.includes(8)){
                        res.textContent = 'jogador 2 venceu'
                        newGame()
                        pontoJ2()
                    }else if(arrayJogador2.includes(2) && arrayJogador2.includes(5) && arrayJogador2.includes(8)){
                        res.textContent = 'jogador 2 venceu'
                        newGame()
                        pontoJ2()
                    }else if(arrayJogador2.includes(1) && arrayJogador2.includes(4) && arrayJogador2.includes(7)){
                        res.textContent = 'jogador 2 venceu'
                        newGame()
                        pontoJ2()
                    }else if(arrayJogador2.includes(3) && arrayJogador2.includes(4) && arrayJogador2.includes(5)){
                        res.textContent = 'jogador 2 venceu'
                        newGame()
                        pontoJ2()
                    }
                }
            }
            tied()
            clique += 1
        })
    }
}

function newGame(){
    btn.style.display = 'block'
    btn.onclick = () =>{
        for (let i = 0; i < casas.length; i++) {
            casas[i].textContent = ''
            res.textContent = ''
            casas[i].classList.remove('jogada')
            arrayJogador2 = []
            arrayJogador1 = []
            clique = 0
            btn.style.display = 'none'
        
        }
    }
    
}
function tied(){
    if(arrayJogador1.length === 5 || arrayJogador2.length === 5){
        res.textContent = 'empatou'
        newGame()
    }
}

function pontoJ1(){
    pontuação1 += 1
    jog1.textContent = pontuação1
}
function pontoJ2(){
    pontuação2 += 1
    jog2.textContent = pontuação2
}

jogada()

