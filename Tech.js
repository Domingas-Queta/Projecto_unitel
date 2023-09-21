document.getElementById("Tema1").addEventListener("click", function(){
    document.getElementById("heroinasTema1").style.display="block";
    document.getElementById("artigosTema2").style.display="none";
    document.getElementById("recursosTema3").style.display="none";

});

document.getElementById("Tema2").addEventListener("click", function(){
    document.getElementById("heroinasTema1").style.display="none";
    document.getElementById("artigosTema2").style.display="block";
    document.getElementById("recursosTema3").style.display="none";
});
document.getElementById("Tema3").addEventListener("click", function(){
    document.getElementById("heroinasTema1").style.display="none";
    document.getElementById("artigosTema2").style.display="none";
    document.getElementById("recursosTema3").style.display="block";
});

