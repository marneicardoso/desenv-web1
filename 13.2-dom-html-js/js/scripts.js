// alert("OK");
// console.log("Buenas");

// 1. Mudando valores com .value
function mudarTexto() {
    // console.log("Entra na function mudarTexto");
    document.getElementById('texto1').value = "Buenas";
}

// 2. Mudando valores com .innerText
function mudarTexto2() {
    console.log("Entra na function mudarTexto2");
    document.getElementById('texto2').innerText = "Texto 2";
}

// 3. Mudando valores com .innerHTML
function mudarTexto3() {
    document.getElementById('texto3').innerHTML = "<h3>Texto 3</h3>";
}

// 4. Mudando uma imagem (ao clicar)
function mudarImagem() {
    document.getElementById('img1').src = "img/pao-queijo.jpg";
}

// 5. Mudando uma imagem (ao passar o mouse)
function mudarImagem2() {
    document.getElementById('img2').src = "img/pao-queijo.jpg";
}

function mudarImagem3() {
    document.getElementById('img2').src = "img/favicon.png";
}

// 6. Mudando o CSS (estilo)
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

// 7. Mudando o texto (com uso de parâmetro)
function mudarTexto4(id) {
    id.innerHTML = "Texto alterado pelo JavaScript (por parâmetro)";
    // id.src = "img/pao-queijo.jpg";
    // alert(id);
}

// 8. Chamando uma function que chama outra
function somar(valor1, valor2) {
    var resultado = valor1 + valor2;

    // alert(resultado);
    return resultado;
}

// somar(3, 6);
// alert(somar(1, 2));

// Chama a function e retona o valor
function mostrarResultado(n1, n2) {

    alert(n1);
    alert(n1.value);

    // Faz a convesão de texto para número
    var num1 = parseInt(n1.value);
    var num2 = parseInt(n2.value);

    var result = somar(num1, num2);
    // var result = somar(n1.value, n2.value);
    // console.log(result);

    document.getElementById('resultado').innerText = "Resultado: " + result;
}

// 9. Clicar, segurar e soltar
function segurar(objeto) {
    objeto.innerHTML = "Solte!";
    objeto.style.backgroundColor = "#1ec5e5";
}

function soltar(objeto) {
    objeto.innerHTML = "Clicar!";
    objeto.style.backgroundColor = "#ff7f50";
}

// 10. Data e hora
function mostrarData() {
    document.getElementById('data').innerHTML = Date();
}

// 11. Calculadora
function calcular(num1, num2) {
    let valor1 = parseInt(num1.value);
    let valor2 = parseInt(num2.value);

    let resultado = valor1 + valor2;
    
    limpar();
    document.getElementById('display').value = resultado;
}

function limpar() {
    document.getElementById('display').value = 0;
    document.getElementById('valor1').value = "";
    document.getElementById('valor2').value = "";
    document.getElementById('valor1').focus();
}


// by Mateus Fernandes
function eat(food1, food2) {
    alert("I like to eat " + food1 + " and " + food2);
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