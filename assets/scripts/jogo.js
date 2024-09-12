
    var canvas = document.getElementById("telaJogo"); //pega o elemento html de id telaJogo para o canvas
    alert(canvas);
    var ctx = canvas.getContext("2d"); // transforma em 2d
    var proxPecaCanvas = document.getElementById("proxPeca");  //pega o elemento html de id proxPeca para o canvas
    var proxPecaCtx = nextPieceCanvas.getContext("2d"); // transforma em 2d

    const ROWS = 20;
    const COLS = 10;
    var board = [];

    function calcularTamanhoBloco() {
        const canvasWidth = canvas.clientWidth;  
        const canvasHeight = canvas.clientHeight;
        const blockWidth = canvasWidth / COLS;
        const blockHeight = canvasHeight / ROWS;
        return Math.min(blockWidth, blockHeight); 
    }

    var BLOCK_SIZE = calcularTamanhoBloco();

    function inicializaBoard() {
        for (let r = 0; r < ROWS; r++) { // Itera sobre o número de linhas do tabuleiro.
            board[r] = []; // Cria uma nova linha como um array vazio.
            console.log(board[r])        
            for (let c = 0; c < COLS; c++) { // Itera sobre o número de colunas do tabuleiro.
                board[r][c] = { value: 0, color: null }; // Preenche cada célula com um objeto que contém 'value' e 'color'.
                console.log("for coluna, ",board[r][c])
            }
        }
    }

    function desenharTabuleiro() {
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                ctx.fillStyle = board[r][c].background-color || "white";  // Preenche com a cor do bloco (ou branco por padrão)
                ctx.fillRect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);  // Desenha o bloco
                ctx.strokeRect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);  // Desenha a borda do bloco
            }
        }
    }

    function inicializarJogo(){
        let BLOCK_SIZE = calcularTamanhoBloco();  // Calcula o tamanho dos blocos
        inicializaBoard();  // Inicializa o tabuleiro
        desenharTabuleiro();  // Desenha o tabuleiro
    }

    window.addEventListener("load", function(){
        //BLOCK_SIZE = calcularTamanhoBloco(); 
        inicializarJogo();
    });


    //window.onload = inicializarJogo;
