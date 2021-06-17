
/* Estrutura de Repetição: while (enquanto) */

// 1. Enquanto o valor for menor que 5, mostre o valor na tela.
function contadorWhile1() {
    // Cria o contador (fora do while)
    let contador = 1;

    // Enquanto o valor (contador) for menor que 5
    while (contador <= 5) {

        // Mostra o valor na tela
        document.querySelector('#contadorW1').innerHTML += contador + ", ";

        // Incrementa o contador (dentro do bloco)
        contador++;
        // contador = contador + 1;
        // contador += 1;
    }
}

// 2. Receba um valor e enquanto o contador for menor que o valor informado, mostre o contador na tela.
function contadorWhile2() {
    // Cria o contador (fora do while)
    let contador = 1;

    // Guarda o número informado na tela
    const numeroInformado = document.querySelector('#numInformadoW2').value;

    // Enquanto o contador for menor que o número informado na tela
    while (contador <= numeroInformado) {
        // Mostra o valor na tela
        document.querySelector('#contadorW2').innerHTML += contador + ", ";

        // Incrementa o contador (dentro do bloco)
        contador++;
    }
}

/* Estrututras de Repetição: for (para) */

// 1. Enquanto o valor for menor que 5, mostre o valor na tela.
function contadorFor1() {

    // Enquanto o valor (contador) for menor que 5
    for (let contador = 1; contador <= 5; contador++) {
        // Mostra o valor na tela
        document.querySelector('#contadorF1').innerHTML += contador + ", ";
    }
}

// 2. Receba um valor e enquanto o contador for menor que o valor informado, mostre o contador na tela.
function contadorFor2() {

    // Guarda o número informado na tela
    const numeroInformado = document.querySelector('#numInformadoF2').value;

    // Enquanto o contador for menor que o número informado na tela
    for (let contador = 1; contador <= numeroInformado; contador++) {
        // Mostra o valor na tela
        document.querySelector('#contadorF2').innerHTML += contador + ", ";
    }
}

// 3.1. Algoritmo para verificar se um número é Par ou Ímpar
function verificarParImpar() {
    const valor = document.querySelector('#valor3').value;

    if (valor % 2 == 0) {
        alert("Par");
    
    } else {
        alert("Ímpar");
    }
}

// 3.2. Escreva um algoritmo que receba 5 números inteiros. Se o número informado for par, multiplique. Se o número informado for ímpar, some.
function calcularParImpar() {
    // Declaração das variáveis
    let num;
    let cont = 0;
    let soma = 0;
    let mult = 1;

    // Recebe os valores enquanto for menor que 5
    while (cont < 5) {
        num = prompt("Informe um número");
        num = parseInt(num);

        // verifica se é par
        if (num % 2 == 0) {
            mult = mult * num;
            // mult *= num;
        
        } else {
            soma = soma + num;
            // soma += num;
        }

        cont++;
    }

    alert("Pares: " + mult);
    alert("Ímpares: " + soma);
}