let numeroRecebido 
// let tempo = 5

function escolherNumero() {
    // ARMAZENANDO NUMERO RECEBIDO NO INPUT
    let numeroRecebido = document.getElementById("numero").value
    // CONVERTENDO-O DE STRING PARA NUMBER
    numeroRecebido = Number(numeroRecebido)

    // VALIDAÇÕES: RECEBER APENAS NUMEROS ENTRE 1 E 50
    // SE - 1 OU + 50 BARRAR 
    // SE NÃO FOR UM NUMERO OU NAO PREENCHER NADA BARRAR 
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
    // ENCAMINHAR PARA A PROXIMA PAGE
    window.location.href = `sorteio.html?numero=${numeroRecebido}`
}
