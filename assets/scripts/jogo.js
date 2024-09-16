
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
=======

const shapeFreezeAudio = new Audio("./audios/audios_tetraminoFreeze.wav")
const completedLineAudio = new Audio("./audios/audios_completedLine.wav")
const gameOverAudio = new Audio("./audios/audios_gameOver.wav")


const colors = ["blue", "yellow", "red", "orange", "pink"]
let currentColor = Math.floor(Math.random() * colors.length)
let nextColor = Math.floor(Math.random() * colors.length)


// Shapes
const gridWidth = 10


const lShape = [
  [1, 2, gridWidth + 1, gridWidth*2 + 1], //primeira rotação
  [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth*2 + 2], //segunda rotação
  [1, gridWidth + 1, gridWidth*2, gridWidth*2 + 1], //terceira rotação
  [gridWidth, gridWidth*2, gridWidth*2 + 1, gridWidth*2 + 2] //quarta rotação
]


const zShape = [
  [gridWidth + 1, gridWidth + 2, gridWidth*2, gridWidth*2 + 1],
  [0, gridWidth, gridWidth + 1, gridWidth*2 + 1],
  [gridWidth + 1, gridWidth + 2, gridWidth*2, gridWidth*2 + 1],
  [0, gridWidth, gridWidth + 1, gridWidth*2 + 1]
]


const tShape = [
  [1, gridWidth, gridWidth + 1, gridWidth + 2],
  [1, gridWidth + 1, gridWidth + 2, gridWidth*2 + 1],
  [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth*2 + 1],
  [1, gridWidth, gridWidth + 1, gridWidth*2 + 1]
]


const oShape = [
  [0, 1, gridWidth, gridWidth + 1],
  [0, 1, gridWidth, gridWidth + 1],
  [0, 1, gridWidth, gridWidth + 1],
  [0, 1, gridWidth, gridWidth + 1]
]


const iShape = [
  [1, gridWidth + 1, gridWidth*2 + 1, gridWidth*3 + 1],
  [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth + 3],
  [1, gridWidth + 1, gridWidth*2 + 1, gridWidth*3 + 1],
  [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth + 3]
]


const allShapes = [lShape, zShape, tShape, oShape, iShape] //todos as peças


let currentPosition = 3 // onde os quadradinhos se iniciam, três divs para a direita
let currentRotation = 0 // rotação inicial (primeira rotação)
let randomShape = Math.floor(Math.random() * allShapes.length) // escolhe um número aleatório de acordo o numero de elementos na lista allshapes
let currentShape = allShapes[randomShape][currentRotation] // peça escolhida aleatoriamente pelo random na rotação inicial definada acima, 0
let $gridSquares = Array.from(document.querySelectorAll(".grid div")) // $ -> elemento do html já criado
  //


function draw() {
  currentShape.forEach(squareIndex => { //pega cada quadradinho e
    $gridSquares[squareIndex + currentPosition].classList.add("shapePainted", `${colors[currentColor]}`) //adiciona uma classe de "shapePainted", alterandoo assim para o definido no css
  })
}
draw()


function undraw() {
  currentShape.forEach(squareIndex => {
    $gridSquares[squareIndex + currentPosition].classList.remove("shapePainted", `${colors[currentColor]}`) // mesma coisa do draw(), porém ao invés de add a class "shapePainted", a remove
  })
}


const $miniGridSquares = document.querySelectorAll(".mini-grid div")
let miniGridWidth = 6
let nextPosition = 2
const possibleNextShapes = [
  [1, 2, miniGridWidth + 1, miniGridWidth*2 + 1],
  [miniGridWidth + 1, miniGridWidth + 2, miniGridWidth*2, miniGridWidth*2 + 1],
  [1, miniGridWidth, miniGridWidth + 1, miniGridWidth + 2],
  [0, 1, miniGridWidth, miniGridWidth + 1],
  [1, miniGridWidth + 1, miniGridWidth*2 + 1, miniGridWidth*3 + 1]
]


let nextRandomShape = Math.floor(Math.random() * possibleNextShapes.length)
function displayNextShape() {
  $miniGridSquares.forEach(square => square.classList.remove("shapePainted", `${colors[nextColor]}`))
  nextRandomShape = Math.floor(Math.random() * possibleNextShapes.length)
  nextColor = Math.floor(Math.random() * colors.length)
  const nextShape = possibleNextShapes[nextRandomShape]
  nextShape.forEach(squareIndex =>
    $miniGridSquares[squareIndex + nextPosition + miniGridWidth].classList.add("shapePainted", `${colors[nextColor]}`)  
  )
}
displayNextShape()






// setInterval(moveDown, 700)
let timeMoveDown = 700; // velocidade que ele desce
let timerId = null;
const $startButton = document.getElementById("start-button");
const $pauseButton = document.getElementById("pause-button");
const $popup = document.getElementById("popup");
const $resumeButton = document.getElementById("resume-button");
const $restartPopupButton = document.getElementById("restart-popup-button");
const $homeButton = document.getElementById("home-button");
const overlay = document.querySelector(".overlay");


$startButton.addEventListener("click", () => {
  if (!timerId) {
    timerId = setInterval(moveDown, timeMoveDown);
    $startButton.disabled = true;
    $pauseButton.disabled = false;
  }
});


$pauseButton.addEventListener("click", () => {
  overlay.style.display = "block";
  clearInterval(timerId);
  timerId = null;
  $popup.classList.remove("hidden");
  $grid.classList.add("paused");
});


$resumeButton.addEventListener("click", () => {
  overlay.style.display = "none";
  timerId = setInterval(moveDown, timeMoveDown);
  $popup.classList.add("hidden");
  $grid.classList.remove("paused");
});


$restartPopupButton.addEventListener("click", () => {
  window.location.reload();
});


$homeButton.addEventListener("click", () => {
  window.location.href = "index.html";
});


/* MOVIMENTAÇÃO - PEÇA DESCENDO*/
function moveDown() {
  freeze() // verificando se precisa parar ou não


  undraw() // desdesenha
  currentPosition += 10 // vai para a div de baixo (na matrix)
  draw() // desenha novamente a peça
}


const $score = document.querySelector(".score")
let score = 0
function updateScore(updateValue) {
  score += updateValue
  $score.textContent = score


  clearInterval(timerId)
  if (score <= 450) {
    timeMoveDown = 500
  }
  else if (450 < score && score <= 1000) {
    timeMoveDown = 400
  } else if (1000 < score && score <= 1700) {
    timeMoveDown = 300
  } else if (1700 < score && score <= 2700) {
    timeMoveDown = 200
  } else if (2700 < score && score <= 3850) {
    timeMoveDown = 150
  } else {
    timeMoveDown = 110
  }
  timerId = setInterval(moveDown, timeMoveDown)
}


const $line = document.querySelector(".linhaQuebrada")
let line = 0


function updateLine(updateValue){
  line+=updateValue;
  $line.textContent = line


}




let $grid = document.querySelector(".grid")
function checkIfRowIsFilled() {
  for (var row = 0; row < $gridSquares.length; row += gridWidth) {
    let currentRow = []


    for (var square = row; square < row + gridWidth; square++) {
      currentRow.push(square)
    }


    const isRowPainted = currentRow.every(square =>
      $gridSquares[square].classList.contains("shapePainted")  
    )


    if (isRowPainted) {
      const squaresRemoved = $gridSquares.splice(row, gridWidth)
      squaresRemoved.forEach(square =>
        // square.classList.remove("shapePainted", "filled")
        square.removeAttribute("class")
      )
      $gridSquares = squaresRemoved.concat($gridSquares)
      $gridSquares.forEach(square => $grid.appendChild(square))
      updateLine(1)
      updateScore(100)
      completedLineAudio.play()
    }
  }
}


const $gameover = document.querySelector(".gameover");
// const $overlayGameOver = document.querySelector(".overlayGameOver");


function gameOver() {
  if (currentShape.some(squareIndex =>
    $gridSquares[squareIndex + currentPosition].classList.contains("filled")  
  )) {
    overlay.style.display = "block";

    $gameover.style.display = 'block';


    updateScore(-10)
    clearInterval(timerId)
    timerId = null
    $startStopButton.disabled = true
    gameOverAudio.play()
    $score.innerHTML += "<br />" + "GAME OVER"
  }
}


/* FAZ O QUADRADO PARAR AO FINAL DA TELA */
function freeze() {
  if (currentShape.some(squareIndex => // se algum quadrinho
    $gridSquares[squareIndex + currentPosition + gridWidth].classList.contains("filled") // se + gridWidth -> quadradinho abaixo, tem essa class "filled"
  )) {


    // se encostar em alguma div com class "filled", então, se torna um "filled", também
    currentShape.forEach(squareIndex => $gridSquares[squareIndex + currentPosition].classList.add("filled"))


    // Criar um novo shape e colocando na posição inicial
    currentPosition = 3
    currentRotation = 0
    randomShape = nextRandomShape
    currentShape = allShapes[randomShape][currentRotation]
    currentColor = nextColor
    draw()


    checkIfRowIsFilled()


    updateScore(10)
    shapeFreezeAudio.play()


    displayNextShape()
    gameOver()
  }
}


/* FUNÇÕES MOVIMENTAÇÃO */
function moveLeft() {
  // verificação de limite de borda
  const isEdgeLimit = currentShape.some(squareIndex => (squareIndex + currentPosition) % gridWidth === 0) // se o resta divisão de cada número do quadradinho por 10 (gridWidth) = 0
  if (isEdgeLimit) return // se estiver na borda esquerda, impedi o movimento
 


  const isFilled = currentShape.some(squareIndex =>
    $gridSquares[squareIndex + currentPosition - 1].classList.contains("filled")  
  )
  if (isFilled) return


  undraw() // deaparece
  currentPosition -= 1 // diminui uma div, indo para a esquerda
  draw() // desenha novamante
}


function moveRight() {
  const isEdgeLimit = currentShape.some(squareIndex => (squareIndex + currentPosition) % gridWidth === gridWidth - 1) // se o resto da divisão de cada número do quadradinho por 10 (gridWidth) = 9
  if (isEdgeLimit) return // se estiver na borda direita, impedi o movimento


  const isFilled = currentShape.some(squareIndex =>
    $gridSquares[squareIndex + currentPosition + 1].classList.contains("filled")
  )
  if (isFilled) return


  undraw()
  currentPosition += 1 // aumenta uma div, indo para a direita
  draw()
}


function previousRotation() {
  if (currentRotation ===  0) {
    currentRotation = currentShape.length - 1
  } else {
    currentRotation--
  }
  currentShape = allShapes[randomShape][currentRotation]
}


function rotate() {
  undraw()
 
  if (currentRotation === currentShape.length - 1) {
    currentRotation = 0
  } else {
    currentRotation += 1
  }


  currentShape = allShapes[randomShape][currentRotation]


  const isLeftEdgeLimit = currentShape.some(squareIndex => (squareIndex + currentPosition) % gridWidth === 0)
  const isRightEdgeLimit = currentShape.some(squareIndex => (squareIndex + currentPosition) % gridWidth === 9)
  if (isLeftEdgeLimit && isRightEdgeLimit) {
    previousRotation()
  }


  const isFilled = currentShape.some(squareIndex =>
    $gridSquares[squareIndex + currentPosition].classList.contains("filled")  
  )
  if (isFilled) {
    previousRotation()
  }


  draw()
}


/* MOVIMENTAÇÃO - TECLADO */
document.addEventListener("keydown", controlKeyboard)
function controlKeyboard(event) {
  if (timerId) {
    if (event.key === "ArrowLeft") {
      moveLeft()
    } else if (event.key === "ArrowRight") {
      moveRight()
    } else if (event.key === "ArrowDown") {
      moveDown()
    } else if (event.key === "ArrowUp") {
      rotate()
    }
  }
}


/* MOVIMENTAÇÃO - BOTÕES NA TELA */
const isMobile = window.matchMedia('(max-width: 990px)').matches
if (isMobile) {
  const mobileButtons = document.querySelectorAll(".mobile-buttons-container button")
  mobileButtons.forEach(button => button.addEventListener("click", () => {
    if (timerId) {
      if (button.classList[0] === "left-button") {
        moveLeft()
      } else if (button.classList[0] === "right-button") {
        moveRight()
      } else if (button.classList[0] === "down-button") {
        moveDown()
      } else if (button.classList[0] === "rotate-button") {
        rotate()
      }
    }
  }))
}



