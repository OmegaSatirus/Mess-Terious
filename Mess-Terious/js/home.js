document.addEventListener("DOMContentLoaded", function() {
    var Titulo = document.title;
    var LinkJS = document.getElementById('LinkJs');
    var divPedaco = document.querySelector('.Pedaco');

    function SomeHome(){
        if (Titulo == "Bem-Vindo!"){
            LinkJS.style.display="none";
            divPedaco.style.display="block";
        }
    }

    SomeHome();
});
