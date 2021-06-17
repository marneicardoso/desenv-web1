// 1. Algoritmo para verificar a idade
function verificarIdade(idade) {
    // Verifica se a idade informada é 18 ou maior
    if (idade.value >= 18) {
        console.log("Maior de 18");

    } else {
        console.log("Menor de idade");
    }

    if (idade.value == 5) {
        console.log("é cinco");
    }

    // console.log(idade.value);
}

// 2. Escreva um algoritmo que receba 2 valores e mostre o maior valor entre eles.
function verificarMaior() {
    const valor1 = document.querySelector('#valor1').value;
    const valor2 = document.getElementById('valor2').value;
    let maior = null;

    // Verifica o maior valor
    if (valor1 > valor2) {
        maior = valor1;
        // console.log("Maior é " + maior);

    } else if (valor2 > valor1) {
        maior = valor2;
        // console.log("Maior é " + maior);

    } else {
        maior = "valores iguais";
    }

    document.querySelector('#resultado').value = maior;
    // console.log(valor1);
    // alert(valor1);
}

// 3. Escreva um algoritmo que receba 3 valores. Mostre os valores em ordem crescente.
function mostrarOrdemCrescente() {

}

// 4. Calcule 23% do valor do produto.
function calcularPorcentagem(_valorProdutoOriginal, _porcentagem) {
    // Encapsula os valores vindos da tela
    const valorProdutoOriginal = _valorProdutoOriginal.value;
    const porcentagem = _porcentagem.value;

    // Divide o valor do produto por 100
    const valorPercentual = valorProdutoOriginal / 100;
    // valorPercentual = 500 / 100;
    // 5

    // Pega a centésima parte e multiplica por 23 (o valor da porcentagem)
    const valorComDesconto = valorPercentual * porcentagem;
    // valorComDesconto = 5 * 23;
    // 115

    // Calcula o valor original e diminui o valor do desconto
    const valorFinal = valorProdutoOriginal - valorComDesconto;
    // valorFinal = 500 - 115
    // 385

    // Mostra o resultado na tela
    document.querySelector('#resultado4').value = valorComDesconto;
}

// 5. Escreva um algoritmo que receba uma região do país e informe o nome dessa região informada.
function mostrarRegiao() {
    const regiao = parseInt(document.getElementById('regiao').value);
    let resultado = null;

    switch (regiao) {
        case 1:
            resultado = "Sul";
            break;

        case 2:
            resultado = "Sudeste";
            break;

        case 3:
            resultado = "Centro-Oeste";
            break;

        case 4:
            resultado = "Norte";
            break;

        case 5:
            resultado = "Nordeste";
            break;

        default:
            resultado = "Informe um valor de 1 a 5";
    }

    document.getElementById('resultado5').value = resultado;
}