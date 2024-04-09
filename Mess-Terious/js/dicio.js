// Array de palavras e seus significados
var palavrasESignificados = [
    { palavra: "Abacaxi", significado: "Fruta tropical de casca dura e polpa doce." },
    { palavra: "Cachorro", significado: "Um animal doméstico de quatro patas, conhecido por sua lealdade." },
    { palavra: "Lápis", significado: "Um instrumento de escrita feito de madeira com uma mina de grafite." },
    { palavra: "Computador", significado: "Máquina eletrônica capaz de receber, armazenar, processar e enviar dados." },
    { palavra: "Livro", significado: "Conjunto de folhas impressas e encadernadas contendo textos escritos." },
    { palavra: "Maçã", significado: "Fruto comestível de uma árvore da família Rosaceae." },
    { palavra: "Carro", significado: "Veículo motorizado com quatro rodas, geralmente utilizado para transporte de pessoas." },
    { palavra: "Futebol", significado: "Esporte jogado entre duas equipes de onze jogadores, que buscam marcar gols." },
    { palavra: "Água", significado: "Substância líquida transparente, incolor e insípida, essencial para a vida." },
    { palavra: "Casa", significado: "Edifício destinado a habitação humana." },
    { palavra: "Aventura", significado: "Experiência emocionante, arriscada e muitas vezes perigosa." },
    { palavra: "Bicicleta", significado: "Veículo de duas rodas movido pela força do ciclista." },
    { palavra: "Céu", significado: "Espaço atmosférico visto de uma determinada localidade." },
    { palavra: "Dinheiro", significado: "Meio de troca utilizado para comprar bens e serviços." },
    { palavra: "Elefante", significado: "Mamífero de grande porte, caracterizado por suas presas longas." },
    { palavra: "Floresta", significado: "Grande extensão de terra coberta por árvores e vegetação." },
    { palavra: "Guitarra", significado: "Instrumento musical de cordas, geralmente tocado com os dedos ou palheta." },
    { palavra: "Hipopótamo", significado: "Mamífero herbívoro de grande porte, encontrado principalmente na África." },
    { palavra: "Igreja", significado: "Edifício destinado ao culto religioso." },
    { palavra: "Jardim", significado: "Área cultivada com plantas, flores e vegetação." },
    { palavra: "Kanguru", significado: "Mamífero marsupial encontrado na Austrália." },
    { palavra: "Lâmpada", significado: "Dispositivo que produz luz artificial." },
    { palavra: "Montanha", significado: "Elevação natural e proeminente da superfície terrestre." },
    { palavra: "Navio", significado: "Embarcação utilizada para navegar em águas navegáveis." },
    { palavra: "Óculos", significado: "Dispositivo óptico utilizado para corrigir ou melhorar a visão." },
    { palavra: "Piano", significado: "Instrumento musical de teclas, geralmente tocado com os dedos." },
    { palavra: "Quadrado", significado: "Figura geométrica com quatro lados de igual comprimento." },
    { palavra: "Rato", significado: "Pequeno mamífero roedor encontrado em diversas partes do mundo." },
    { palavra: "Sapato", significado: "Calçado utilizado para proteger e cobrir os pés." },
    { palavra: "Tigre", significado: "Grande felino encontrado em diversas regiões da Ásia." },
    { palavra: "Uva", significado: "Fruto comestível produzido pela videira." },
    { palavra: "Violino", significado: "Instrumento musical de cordas, geralmente tocado com um arco." },
    { palavra: "Xícara", significado: "Recipiente utilizado para servir bebidas quentes." },
    { palavra: "Yoga", significado: "Prática física, mental e espiritual originada na Índia antiga." },
    { palavra: "Zebra", significado: "Mamífero listrado da família dos equídeos, nativo da África." },
];
function obterPalavraAleatoria() {
    var indice = Math.floor(Math.random() * palavrasESignificados.length);
    var palavraAleatoria = palavrasESignificados[indice];
    return palavraAleatoria;
}

function exibirPalavraESignificado() {
    var palavraESignificado = obterPalavraAleatoria();
    
    var h2Palavra = document.createElement("h2");
    h2Palavra.id = "titulo";
    h2Palavra.textContent = palavraESignificado.palavra;

    var pSignificado = document.createElement("p");
    pSignificado.id = "significado"
    pSignificado.textContent = palavraESignificado.significado;

    var divPalavraSignificado = document.getElementById("palavraSignificado");
    divPalavraSignificado.innerHTML = ""; 

    divPalavraSignificado.appendChild(h2Palavra);
    divPalavraSignificado.appendChild(pSignificado);
}

exibirPalavraESignificado();