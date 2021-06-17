
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
    }
]; // Array (Matriz)

// const blocoProdutos = document.getElementById('bloco-produtos');
const blocoProdutos = document.querySelector('#bloco-produtos');

let rowProduto;
let colProduto;
let cont = 0;

// Cria a estrutura do Produto
const divProduto = document.createElement('div');
divProduto.classList.add('produto'); // Adiciona a classe produto
// divProduto.setAttribute('onmouseover', 'mudarCorBtn()');
// divProduto.setAttribute('onmouseout', 'voltarCorBtn()');

// Cria a estrutura da Foto do produto
const divFotoProduto = document.createElement('div');
divFotoProduto.classList.add('foto'); // Adiciona a classe foto

// Cria o elemento img com o atributo src e o texto alternativo (alt)
const tagImg = document.createElement('img');
tagImg.classList.add('img-produto'); // Adiciona a classe img-produto
tagImg.setAttribute('src', 'img/pao-frances.jpg');
tagImg.setAttribute('alt', 'Pão francês');

// Cria a estrutura do Nome do produto
const divNomeProduto = document.createElement('div');
divNomeProduto.classList.add('nome-produto'); // Adiciona a classe nome-produto
divNomeProduto.innerHTML = '<h3>Pão francês</h3>';



divFotoProduto.appendChild(tagImg);
divProduto.appendChild(divFotoProduto);
divProduto.appendChild(divNomeProduto);
blocoProdutos.appendChild(divProduto);



function mudarCorBtn(btnComprar) {
    btnComprar.classList.replace('btn-outline-light', 'btn-success');
}

function voltarCorBtn(btnComprar) {
    btnComprar.classList.replace('btn-success', 'btn-outline-light');
}