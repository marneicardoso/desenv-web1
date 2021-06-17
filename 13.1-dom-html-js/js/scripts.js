// alert("OK");
// console.log("Buenas");
function mudarTexto() {
    // console.log("Entra na function mudarTexto");
    document.getElementById('texto1').value = "Buenas";
}

function mudarTexto2() {
    console.log("Entra na function mudarTexto2");
    document.getElementById('texto2').innerText = "Texto 2";
}

function mudarTexto3() {
    document.getElementById('texto3').innerHTML = "<h3>Texto 3</h3>";
}

function mudarImagem() {
    document.getElementById('img1').src = "img/pao-queijo.jpg";
}

function mudarImagem2() {
    document.getElementById('img2').src = "img/pao-queijo.jpg";
}

function mudarImagem3() {
    document.getElementById('img2').src = "img/favicon.png";
}

function mudarCorTexto() {
    var texto = document.getElementById('texto6');

    // Mudar o cor do texto
    // texto.style.color = "blue";
    texto.style.color = "#8400ff";
    texto.style.backgroundColor = "#fdff9a";
    texto.style.padding = "10px";
    texto.style.fontSize = "1.2rem";
    // texto.style.fontSize = "24px";
    texto.style.fontWeight = "600";
}

function mudarTexto4(id) {
    id.innerHTML = "Texto alterado pelo JavaScript (por parâmetro)";
    // id.src = "img/pao-queijo.jpg";
}

function somar(valor1, valor2) {
    var resultado = valor1 + valor2;

    alert(resultado);
}

// somar(3, 6);




// by Mateus Fernandes
function eat(food1, food2) {
    alert("I like to eat " + food1 + " and " + food2 );
}

function myFunc(callback, args) {

    //execute callback when finished
    callback.apply(this, args);
}

//alerts "I like to eat pickles and peanut butter"
// myFunc(eat, ["pickles", "peanut butter"]);

function comer() {
    myFunc(eat, ["pickles", "peanut butter"]);
}