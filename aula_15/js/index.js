// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
let cardRef = document.querySelector('.card');
let usuarioRef = document.querySelector('.usuario');
let emailRef = document.querySelector('.email');
let randomUser = document.querySelector('#random');

start()

function start() {
     fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos a resposta    
        renderizarDadosUsuario(data.results[0]);
    });
}

randomUser.addEventListener('click', () => {
        start()
});

function renderizarDadosUsuario(dados) {

    cardRef.innerHTML = `
    <img src="${dados.picture.large}" alt=""> 
    `;

    emailRef.innerHTML = `
    <span>${dados.email}</span>
    `;

    usuarioRef.innerHTML = `
    <span>${dados.name.first} ${dados.name.last}</span>
    `;
}






/* -------------------------------- Tarefa 1 -------------------------------- */
// Aqui devem desenvolver uma função que seja exibida na tela:
// a foto, o nome completo do usuário e o e-mail.
// Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.

/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.
