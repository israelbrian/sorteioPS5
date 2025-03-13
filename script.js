let numeroRecebido 
let numeroSorteado
// let tempo = 5

function escolherNumero() {
    let numeroRecebido = document.getElementById("numero").value
    numeroRecebido = parseFloat(numeroRecebido)

    if (numeroRecebido === 0 || numeroRecebido < 0 ) {
        alert('Digite um número maior que 0!')
        return false
    } else if (numeroRecebido > 50) {
        alert('Digite um número menor que 50!')
        return false
    } else if (isNaN(numeroRecebido)) {
        alert('Digite um número válido!')
        return false
    }

    window.location.href = `sorteio.html?numero=${numeroRecebido}`



    // document.getElementById('titulo').innerHTML = `Ótima escolha! O Número escolhido foi: ${numeroEscolhido}`
}

// sorteio = Math.floor(Math.random() * 50)