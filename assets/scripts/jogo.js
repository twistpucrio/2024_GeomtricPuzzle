const canvas = document.getElementsById("telaJogo");
const ctx = canvas.getContext("2d"); // contexto de trabalho

const ROWS = 20;
const COLS = 10;
const BLOCK_SIZE = 30;

let gameInterval;

const COLORS = [
	"#FF0000", // Red
	"#00FF00", // Green
	"#0000FF", // Blue
	"#FFFF00", // Yellow
	"#FF00FF", // Magenta
	"#00FFFF", // Cyan
	"#FFA500" // Orange
];

function desenha_area_de_jogo(){
    ctx.fillStyle = "#FFFF00"; //definição do preenchimento
    
    //pega o último estilo defindo antes dele
    ctx.fillRect(10, 30, 300, 300) // pega a largura e altura do que está na const canvas


    // for (let r = 0; r < ROWS; r++) {
	// 	for (let c = 0; c < COLS; c++) {
	// 		if (board[r][c].value) {
	// 			ctx.fillStyle = COLORS[board[r][c].color];
	// 			ctx.fillRect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
	// 			ctx.strokeStyle = "black";
	// 			ctx.strokeRect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
	// 		}
	// 	}
    // }
    
}

// function update() {
//     desenha_area_de_jogo();
// }

// gameInterval = setInterval(update, GAME_SPEED);
// desenha_area_de_jogo();

ctx.fillStyle = "#FFFF00"; //definição do preenchimento
    
//pega o último estilo defindo antes dele
ctx.fillRect(10, 30, 300, 300) // pega a largura e altura do que está na const canvas