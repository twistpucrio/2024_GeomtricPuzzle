
const canvas = document.getElementById("telaJogo"); //pega o elemento html de id telaJogo para o canvas
const ctx = canvas.getContext("2d"); // transforma em 2d
const proxPecaCanvas = document.getElementById("proxPeca");  //pega o elemento html de id proxPeca para o canvas
const proxPecaCtx = nextPieceCanvas.getContext("2d"); // transforma em 2d

const ROWS = 20;
const COLS = 10;
let board = [];

function calcularTamanhoBloco() {
    const canvasWidth = canvas.clientWidth;  
    const canvasHeight = canvas.clientHeight;
    const blockWidth = canvasWidth / COLS;
    const blockHeight = canvasHeight / ROWS;
    return Math.min(blockWidth, blockHeight); 
}

let BLOCK_SIZE = calcularTamanhoBloco();

function inicializaBoard() {
    for (let r = 0; r < ROWS; r++) { // Itera sobre o número de linhas do tabuleiro.
        board[r] = []; // Cria uma nova linha como um array vazio.
        for (let c = 0; c < COLS; c++) { // Itera sobre o número de colunas do tabuleiro.
            board[r][c] = { value: 0, color: null }; // Preenche cada célula com um objeto que contém 'value' e 'color'.
        }
    }
}

function desenharTabuleiro() {
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            ctx.fillStyle = board[r][c].color || "white";  // Preenche com a cor do bloco (ou branco por padrão)
            ctx.fillRect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);  // Desenha o bloco
            ctx.strokeRect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);  // Desenha a borda do bloco
        }
    }
}

function inicializarJogo() {
    BLOCK_SIZE = calcularTamanhoBloco();  // Calcula o tamanho dos blocos
    inicializaBoard();  // Inicializa o tabuleiro
    desenharTabuleiro();  // Desenha o tabuleiro
}

window.addEventListener("resize", () => {
    BLOCK_SIZE = calcularTamanhoBloco(); 
    desenharTabuleiro();
});


window.onload = inicializarJogo;
