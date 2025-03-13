let tempo = 2
let numeroSorteado
let numeroEscolhido
let numeroEscolhidoConvertido

        window.onload = function() {
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
            numeroSorteado = Math.ceil(Math.random() * 3)
            
            let divResultado = document.getElementById('div-principal')
            divResultado.classList.remove('main-win', 'main-lose'); // REMOVE AS CLASSES DE VITÓRIA E DERROTA

            // VALIDA SE O NÚMERO ESCOLHIDO É IGUAL AO SORTEADO
            if (numeroEscolhidoConvertido === numeroSorteado) {
                document.getElementById('titulo').innerText = `Parabéns! Você acertou! 🎉🎉`
                document.getElementById('cronometro').innerText = `O resultado foi ${numeroSorteado}`
                divResultado.classList.add('main-win'); // ADICIONA APENAS A CLASSE DE VITÓRIA
                let tentarDenovo = document.createElement('button')
                tentarDenovo.innerText = 'Tentar novamente'
            } else {
                document.getElementById('titulo').innerText = `Infelizmente você errou! 😭😭`
                document.getElementById('cronometro').innerText = `O resultado foi ${numeroSorteado}`
                divResultado.classList.add('main-lose'); // ADICIONA APENAS A CLASSE DE DERROTA
                let tentarDenovo = document.createElement('button')
                tentarDenovo.innerText = 'Tentar novamente'
            }

        }
    