
function gerarNome() {
    const nomes = ['Ana', 'João', 'Maria', 'Pedro', 'Luana', 'Carlos', 'Juliana', 'Fernando', 'Mariana', 'Rafael', 'Larissa', 'Gabriel', 'Camila', 'Lucas', 'Isabela', 'Rodrigo', 'Letícia', 'Gustavo', 'Carolina', 'Diego', 'Patrícia', 'Daniel', 'Aline', 'Guilherme', 'Amanda', 'Bruno', 'Natália', 'Vinícius', 'Tatiane'];
    const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    document.getElementById('nomeOutput').innerText = `Nome: ${nomeAleatorio}`;
}

function gerarSobrenome() {
    const sobrenomes = ['Silva', 'Santos', 'Oliveira', 'Pereira', 'Ferreira', 'Rodrigues', 'Almeida', 'Martins', 'Costa', 'Lima', 'Carvalho', 'Gomes', 'Rocha', 'Martins', 'Alves', 'Monteiro', 'Correia', 'Castro', 'Ribeiro', 'Neves', 'Mendes', 'Araújo', 'Nunes', 'Cardoso', 'Coelho', 'Cunha', 'Moraes', 'Gonçalves', 'Dias', 'Barbosa'];    const sobrenomeAleatorio = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    document.getElementById('sobrenomeOutput').innerText = `Sobrenome: ${sobrenomeAleatorio}`;
}

function gerarCor() {
    const cores = ['#FF5733', '#33FF57', '#5733FF', '#F4FF33', '#33FFF4', '#FF3366', '#3366FF', '#33FF33', '#FFFF33', '#FF33FF', '#33FFFF', '#CC33FF', '#FF6633', '#33FF66', '#6633FF', '#FF9933', '#33FF99', '#9933FF', '#FFCC33', '#33FFCC', '#CC33FF', '#FF3300', '#3300FF', '#00FF33', '#FF00FF', '#00FFFF', '#FFFF00', '#FF0099', '#0099FF'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.getElementById('corOutput').style.backgroundColor = corAleatoria;
    document.getElementById('corOutput').innerText = `Cor: ${corAleatoria}`;
}

function gerarNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 10000) + 1;
    document.getElementById('numeroOutput').innerText = `Número: ${numeroAleatorio}`;
}

function gerarPalavra() {
    const palavras = ['gato', 'cachorro', 'banana', 'abacaxi', 'morango', 'elefante', 'computador', 'praia', 'sol', 'lua', 'estrela', 'carro', 'bicicleta', 'avião', 'navio', 'trem', 'ônibus', 'futebol', 'basquete', 'natação', 'corrida', 'dança', 'teatro', 'livro', 'filme', 'música', 'pintura', 'escultura', 'jardim', 'montanha', 'rio', 'oceano', 'deserto', 'floresta', 'casa', 'escola', 'trabalho'];
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    document.getElementById('palavraOutput').innerText = `Palavra: ${palavraAleatoria}`;
}