// geradores.js

// Gerador de nome aleatório
function gerarNome() {
    const nomes = ['Ana', 'João', 'Maria', 'Pedro', 'Luana'];
    const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    document.getElementById('nomeOutput').innerText = `Nome: ${nomeAleatorio}`;
}

// Gerador de sobrenome aleatório
function gerarSobrenome() {
    const sobrenomes = ['Silva', 'Santos', 'Oliveira', 'Pereira', 'Ferreira'];
    const sobrenomeAleatorio = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    document.getElementById('sobrenomeOutput').innerText = `Sobrenome: ${sobrenomeAleatorio}`;
}

// Gerador de cor aleatória
function gerarCor() {
    const cores = ['#FF5733', '#33FF57', '#5733FF', '#F4FF33', '#33FFF4'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.getElementById('corOutput').style.backgroundColor = corAleatoria;
    document.getElementById('corOutput').innerText = `Cor: ${corAleatoria}`;
}

// Gerador de número aleatório
function gerarNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    document.getElementById('numeroOutput').innerText = `Número: ${numeroAleatorio}`;
}

// Gerador de palavra aleatória
function gerarPalavra() {
    const palavras = ['gato', 'cachorro', 'banana', 'abacaxi', 'morango'];
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    document.getElementById('palavraOutput').innerText = `Palavra: ${palavraAleatoria}`;
}