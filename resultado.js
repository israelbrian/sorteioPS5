// DESISTIR DESSA BRANCH
// FOCA REM CRIAR UM BUUTON NA PAGE SORTEIO HTML COM A CLASSE HIDDEN 
// DEPOIS COM AS VALIDAÇÕES DO IF TIRAR O HIDDEN E MOSTRAR O BOTÃO
// DEPOIS CRIAR UM EVENTO DE CLICK NO BOTÃO QUE VAI REDIRECIONAR PARA A PÁGINA RESULTADO.HTML

    let params = new URLSearchParams(window.location.search)
    let numeroEscolhidoR = params.get('numero')
    let numeroSorteadoR = Number(params.get('sorteado'))




function sorteio() {
    // REALIZA O SORTEIO
    numeroSorteadoR = Math.ceil(Math.random() * 3)
        
    let divResultado = document.getElementById('div-principal')
    divResultado.classList.remove('main-win', 'main-lose'); // REMOVE AS CLASSES DE VITÓRIA E DERROTA

    // VALIDA SE O NÚMERO ESCOLHIDO É IGUAL AO SORTEADO
    if (numeroEscolhidoConvertidoR === numeroSorteadoR) {
        document.getElementById('titulo-resul').innerText = `Parabéns! Você acertou! 🎉🎉`
        document.getElementById('subtitulo-resul').innerText = `O resultado foi ${numeroSorteado}`
        divResultado.classList.add('main-win'); // ADICIONA APENAS A CLASSE DE VITÓRIA
    } else {
        document.getElementById('titulo-resul').innerText = `Infelizmente você errou! 😭😭`
        document.getElementById('subtitulo-resul').innerText = `O resultado foi ${numeroSorteado}`
        divResultado.classList.add('main-lose'); // ADICIONA APENAS A CLASSE DE DERROTA
    }
}
sorteio()