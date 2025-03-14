let tempo = 15
let numeroSorteado
let numeroEscolhido
let numeroEscolhidoConvertido

document.addEventListener("DOMContentLoaded", function() {
            let params = new URLSearchParams(window.location.search)
            let numeroEscolhido = params.get('numero')
            numeroEscolhidoConvertido = Number(numeroEscolhido)

            if (numeroEscolhido) {
                document.getElementById('titulo').innerText = `Ótima escolha! O Número escolhido foi: ${numeroEscolhido}`
            }

            let cronometro = setInterval(function() {
                tempo -= 1

                if (tempo == 0) {
                    clearInterval(cronometro)
                    document.getElementById('titulo').innerText = 'Sorteio realizado!'
                    sorteio()
                } else {
                    document.getElementById('cronometro').innerText = `O sorteio irá acontecer em ${tempo} segundos`
                }
            }, 1000)
        })

        function sorteio() {
            // REALIZA O SORTEIO
            numeroSorteado = Math.ceil(Math.random() * 50)
            
            let divResultado = document.getElementById('div-principal')
            divResultado.classList.remove('main-win', 'main-lose'); // REMOVE AS CLASSES DE VITÓRIA E DERROTA
            let botaoVoltar = document.getElementById('btn-voltar')

            // VALIDA SE O NÚMERO ESCOLHIDO É IGUAL AO SORTEADO
            if (numeroEscolhidoConvertido === numeroSorteado) {
                document.getElementById('titulo').innerText = `Parabéns! Você acertou! 🎉🎉`
                document.getElementById('cronometro').innerText = `O resultado foi ${numeroSorteado}`
                divResultado.classList.add('main-win'); // ADICIONA APENAS A CLASSE DE VITÓRIA
                botaoVoltar.classList.remove('hidden') // REMOVE A CLASSE HIDDEN ASSIM MOSTRADNO O BOTAO NA TELA

            } else {
                document.getElementById('titulo').innerText = `Infelizmente você errou! 😭😭`
                document.getElementById('cronometro').innerText = `O resultado foi ${numeroSorteado}`
                divResultado.classList.add('main-lose'); // ADICIONA APENAS A CLASSE DE DERROTA
                botaoVoltar.classList.remove('hidden') // REMOVE A CLASSE HIDDEN ASSIM MOSTRADNO O BOTAO NA TELA
            }

        }
    