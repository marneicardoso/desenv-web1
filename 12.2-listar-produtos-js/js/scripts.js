
// Lista de Produtos vindos do Banco de Dados (simulação)
const listaProdutos = [
    produto = {
        id_produto: 1,
        nome_produto: "Pão francês",
        descricao_produto: "Tradicional pão feito com farinha refinada, água, sal e fermento.",
        valor_produto: 8.99,
        foto_produto: "img/pao-frances.jpg"
    },

    produto = {
        id_produto: 2,
        nome_produto: "Pão de queijo",
        descricao_produto: "Quentinho, saindo do forno.",
        valor_produto: 29.99,
        foto_produto: "img/pao-queijo.jpg"
    },

    produto = {
        id_produto: 3,
        nome_produto: "Pão doce",
        descricao_produto: "Pãozinho doce, bem doce mesmo!",
        valor_produto: 9.99,
        foto_produto: "img/pao-doce.jpg"
    },

    produto = {
        id_produto: 4,
        nome_produto: "Pão integral",
        descricao_produto: "Pão feito com farinha integral, que mantém todos os nutrientes.",
        valor_produto: 11.99,
        foto_produto: "img/pao-integral.jpg"
    },

    produto = {
        id_produto: 5,
        nome_produto: "Pão de queijo",
        descricao_produto: "Quentinho, saindo do forno.",
        valor_produto: 29.99,
        foto_produto: "img/pao-queijo.jpg"
    },

    produto = {
        id_produto: 6,
        nome_produto: "Pão integral",
        descricao_produto: "Pão feito com farinha integral, que mantém todos os nutrientes.",
        valor_produto: 11.99,
        foto_produto: "img/pao-integral.jpg"
    }
]; // Array (Matriz)

// const blocoProdutos = document.getElementById('bloco-produtos');
const blocoProdutos = document.querySelector('#bloco-produtos');

let rowProduto;
let colProduto;
let cont = 0; // Conta até 4 (Produtos por Linha)

// Se houver algum Produto na Lista
if (listaProdutos.length > 0) {
    for (let i = 0; i < listaProdutos.length || cont < 4; i++) {
        // Verifica se é o Primeiro produto (para criar nova Linha)
        if (i == 0 || cont == 0) {
            rowProduto = criarDivLinha();
            colProduto = criarDivProduto(i);
            rowProduto.appendChild(colProduto);
            blocoProdutos.appendChild(rowProduto);
        
        } else {
            colProduto = criarDivProduto(i);
            rowProduto.appendChild(colProduto);
        }
        cont++;

        // Se já tem 4 Produtos na tela e ainda tem itens na Lista, cria uma nova Linha
        if (cont == 4 && listaProdutos[i +1] != null) {
            cont = 0;
        }
    }

} else {
    blocoProdutos.innerHTML = "Não há produtos cadastrados";
}

function criarDivLinha() {
    // Cria a linha
    const rowProduto = document.createElement('div');
    rowProduto.classList.add('row');
    return rowProduto;
}

function criarDivProduto(i) {
    const colProduto = document.createElement('div');
    colProduto.classList.add('col-sm');

    // Se não há mais itens na Lista, retorna apenas a div vazia
    if (listaProdutos[i] == null) {
        return colProduto; // Early Return (retorno precoce)
    }

    // Cria a estrutura do Produto
    const divProduto = document.createElement('div');
    divProduto.classList.add('produto'); // Adiciona a classe produto
    divProduto.setAttribute('onmouseover', 'mudarCorBtn(btnComprar' + (i +1) + ')');
    divProduto.setAttribute('onmouseout', 'voltarCorBtn(btnComprar' + (i +1) + ')');

    // Cria a estrutura da Foto do produto
    const divFotoProduto = document.createElement('div');
    divFotoProduto.classList.add('foto'); // Adiciona a classe foto
    divProduto.appendChild(divFotoProduto); // Adiciona o elemento à div pai

    // Cria o elemento img com o atributo src e o texto alternativo (alt)
    const tagImg = document.createElement('img');
    tagImg.classList.add('img-produto'); // Adiciona a classe img-produto
    // tagImg.setAttribute('src', 'img/pao-frances.jpg');
    tagImg.setAttribute('src', listaProdutos[i].foto_produto);
    // tagImg.setAttribute('alt', 'Pão francês');
    tagImg.setAttribute('alt', listaProdutos[i].nome_produto);
    divFotoProduto.appendChild(tagImg); // Adiciona o elemento à div pai

    // Cria a estrutura do Nome do produto
    const divNomeProduto = document.createElement('div');
    divNomeProduto.classList.add('nome-produto'); // Adiciona a classe nome-produto
    // divNomeProduto.innerHTML = 'Pão francês';
    divNomeProduto.innerHTML = listaProdutos[i].nome_produto;
    divProduto.appendChild(divNomeProduto); // Adiciona o elemento à div pai

    // Cria a estrutura da Descrição do produto
    const divDescricaoProduto = document.createElement('div');
    divDescricaoProduto.classList.add('descricao-produto'); // Adiciona a classe descricao-produto
    // divDescricaoProduto.innerHTML = 'Tradicional pão feito com farinha refinada, água, sal e fermento.';
    divDescricaoProduto.innerHTML = listaProdutos[i].descricao_produto;
    divProduto.appendChild(divDescricaoProduto); // Adiciona o elemento à div pai

    // Cria a estrutura do Valor do produto
    const divValorProduto = document.createElement('div');
    divValorProduto.classList.add('preco-produto'); // Adiciona a classe nome-produto
    // divValorProduto.innerHTML = 8.99;
    divValorProduto.innerHTML = listaProdutos[i].valor_produto;
    divProduto.appendChild(divValorProduto); // Adiciona o elemento à div pai

    // Cria a estrutura do Botão Comprar
    const divBtnComprar = document.createElement('div');
    divBtnComprar.classList.add('btn'); // Adiciona a classe btn
    divBtnComprar.classList.add('btn-outline-light'); // Adiciona a classe btn-outline-light
    divBtnComprar.setAttribute('id', 'btnComprar' + (i +1));
    divBtnComprar.innerHTML = "Comprar >>>";
    divProduto.appendChild(divBtnComprar); // Adiciona o elemento à div pai

    // Adiciona o Produto preenchido
    colProduto.appendChild(divProduto);
    return colProduto;
}

// Ajustar as casas decimais (próxima aula)

function mudarCorBtn(btnComprar) {
    btnComprar.classList.replace('btn-outline-light', 'btn-success');
}

function voltarCorBtn(btnComprar) {
    btnComprar.classList.replace('btn-success', 'btn-outline-light');
}