
// Array em JavaScript

const cores = []; // Array vazio

cores[0] = "azul";
console.log(cores);

cores[3] = "verde";
console.log(cores);

cores[1] = "roxo";
console.log(cores);

// Forma mais moderna de adicionar um item no array
// cores.push(123);
console.log(cores.push(123));
console.log(cores.push("Teste"));

const tamanhoArray2 = cores.push(3);

const tamanhoArray = cores.length;
console.log(tamanhoArray);
/*
const carros = [
    "Palio",
    "Civic",
    "Mustang"
];

console.log(carros[0]);

carros[0] = "Grand Siena";*/

// Objetos em JavaScript
const carros = {
    "Fiat": "Palio",
    "Honda": "Civic",
    "Ford": "Mustang"
};

console.log(carros);

/*let pessoa = {
    "id": 5,
    "nome": "Marnei",
    "sobrenome": "Cardoso",
    "idade": 43
};*/

// console.log(pessoa);

const funcionarios = [
    pessoa = {
        "id": 5,
        "nome": "Marnei",
        "sobrenome": "Cardoso",
        "idade": 43
    },

    pessoa = {
        "id": 9,
        "nome": "Odete",
        "sobrenome": "Santos",
        "idade": 78
    }
];

// ===============
/*function listarProduto(lista, id) {
    const carro = document.querySelector('#' + id);

    let rowCarro;
    let colCarro;
    let cont = 0;

    if (lista.length > 0) {
        for (let i = 0; i < lista.length || cont < 1; i++) {
            if (i == 0 || cont == 0) {
                rowCarro = criarDivLinha();
                colCarro = criarDivCarro(lista, i);
                rowCarro.appendChild(colCarro);
                carro.appendChild(rowCarro);

            } else {
                colCarro = criarDivCarro(i);
                rowCarro.appendChild(colCarro);
            }
            cont++;

            if (cont == 1 && lista[i + 1] != null) {
                cont = 0;
            }
        }

    } else {
        carro.innerHTML = "Não há carros " + id + "cadastrados";
    }

}

listarProduto(listaHatch, hatch);
*/