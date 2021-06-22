
const btnAtivar = document.querySelector("#btnAtivar");
const btnLogar = document.querySelector("#btnLogar");
const modal = document.querySelector('#modal');
const loader = document.querySelector('#load');
const status = document.querySelector('#status');
let isLoading = false;

// Forma avançada 2
btnAtivar.addEventListener('click', () => {
    modal.classList.toggle('animar');
    document.querySelector('#email').focus();
    status.style.display = 'none';
}); // << Arrow function

/*
// Forma avançada 1
btnAtivar.addEventListener('click', function() { // << Função anônima em JavaScript
    alert("Buenas");
});
*/

/*
// Forma tradicional
function animarModal() {
    modal.classList.toggle('animar');
}
*/

btnLogar.addEventListener('click', () => {
    console.log("1. isLoad: " + isLoading);

    if (!isLoading) {
        console.log("2. IF");

        isLoading = true;
        console.log("3. isLoad: " + isLoading);

        loader.style.display = 'block';
        console.log("4. loader.display: block");

        loader.classList.toggle('loader');
        console.log("5. toggle('loader')");

        status.style.display = "none";

        setTimeout(() => {
            console.log("6. setTimeout");

            loader.style.display = "none";
            console.log("7. loader.display: none");

            loader.classList.toggle('loader');
            console.log("8. toggle('loader')");

            isLoading = false;
            console.log("9. isLoad: " + isLoading);

            efetuarLogin();

        }, 2000); // tempo em mili (1s == 1000)
    }
});

// Simulando os dados armazenados no Banco de Dados
const emailDB = "prof.marneicardoso@gmail.com";
const senhaDB = "12345";

function efetuarLogin() {
    // Guarda os valores informados no formulário de Login 
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    status.style.display = "block";

    if (email == "") {
        status.style.color = "#ff4639";
        status.innerHTML = "Preencha o campo E-mail";
        document.querySelector('#email').focus();
        return
    }

    if (senha == "") {
        status.style.color = "#ff4639";
        status.innerHTML = "Preencha o campo Senha";
        document.querySelector('#senha').focus();
        return
    }

    // Compara com os dados do Banco de Dados
    if (email == emailDB && senha == senhaDB) {
        status.style.color = "#49b401";
        status.innerHTML = "Login efetuado com sucesso!";
    
    } else {
        status.style.color = "#ff4639";
        status.innerHTML = "E-mail ou senha inválidos";
    }
}