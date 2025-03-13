let tempo = 5
let numeroSorteado
let numeroEscolhido

        window.onload = function() {
            let params = new URLSearchParams(window.location.search)
            let numeroEscolhido = params.get('numero')

            if (numeroEscolhido) {
                document.getElementById('titulo').innerText = `Ótima escolha! O Número escolhido foi: ${numeroEscolhido}`
            }

            let cronometro = setInterval(function() {
                tempo -= 1

                if (tempo == 0) {
                    clearInterval(cronometro)
                    // window.location.href = 'resultado.html'
                    // alert('Sorteio realizado!')
                    document.getElementById('titulo').innerText = 'Sorteio realizado!'
                    sorteio()
                } else {
                    document.getElementById('cronometro').innerText = `O sorteio irá acontecer em ${tempo} segundos`
                }
            }, 1000)
        }

        function sorteio() {
            // REALIZA O SORTEIO
            numeroSorteado = Math.floor(Math.random() * 5)
            
            

            // VALIDA SE O NÚMERO ESCOLHIDO É IGUAL AO SORTEADO
            if (numeroEscolhido == numeroSorteado) {
                document.getElementById('titulo').innerText = `Parabéns! Você acertou o número!`
                document.getElementById('cronometro').innerText = `O resultado foi ${numeroSorteado}`
            } else {
                document.getElementById('titulo').innerText = `Infelizmente você errou o número!`
                document.getElementById('cronometro').innerText = `O resultado foi ${numeroSorteado}`
            }

        }
    