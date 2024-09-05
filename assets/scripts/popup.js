



function mudarEstado(el)
{
    var display = document.getElementById(el).style.display;
        if(display == "none")
            document.getElementById(el).style.display = 'block';
        else
            document.getElementById(el).style.display = 'none';
}

window.addEventListener("load",
    function(){

        let btnRegra = document.querySelector("#btnRegras");
        let btnJogabilidade = document.querySelector("#btnJogabilidades");
        let btnFonte = document.querySelector("#btnFontes");


        let btnFecharRegras = document.querySelector("#btnFechaRegra");
        let btnFecharJogabilidades = document.querySelector("#btnFechaJogabilidade");
        let btnFecharFontes = document.querySelector("#btnFechaFonte");




        btnRegra.addEventListener("click",
            function(){
                mudarEstado("regras");
            });

        btnFecharRegras.addEventListener("click",
            function(){
                mudarEstado("regras");
            });

        btnJogabilidade.addEventListener("click",
            function(){
                mudarEstado("jogabilidade");
            });

        btnFecharJogabilidades.addEventListener("click",
            function(){
                mudarEstado("jogabilidade");
            });

        btnFonte.addEventListener("click",
            function(){
                mudarEstado("fontes");
            });

        btnFecharFontes.addEventListener("click",
            function(){
                mudarEstado("fontes");
            });

});