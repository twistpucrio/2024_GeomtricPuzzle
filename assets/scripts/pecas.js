let peca_01 = document.querySelector(".peca");
let rotation = 0;

var position_x = 0;
var position_y = 0;


function rotacionarPeca(){
    document.addEventListener("keydown", 
        function(event) {
            
            if (event.key === "ArrowUp"){
                rotation += 90;
                peca_01.style.transform = `rotate(${rotation}deg)`;
            }
        }
    )
}


// delimitar o máximo pelo tamanha da área de jogo
function movePeca(){ 
    document.addEventListener("keydown",
        function(event){
            if (event.key === "ArrowRight"){
                position_x += 10; // move para direita
                peca_01.style.transform = `translate(${position_x}px, ${position_y}px)`
            }
            else if (event.key === "ArrowLeft"){
                position_x -= 10;
                peca_01.style.transform = `translate(${position_x}px, ${position_y}px)`

            }
        }
    )
}

function movimentoPeca(){
    document.addEventListener("keydown",
        function(event){
            if (event.key === "ArrowDown"){
                position_y += 10;
                peca_01.style.transform = `translate(${position_x}px, ${position_y}px)`
            }
        }
    )
    
}


window.addEventListener("load",
    function(){
        rotacionarPeca();
        movePeca();
        movimentoPeca();
    }
)