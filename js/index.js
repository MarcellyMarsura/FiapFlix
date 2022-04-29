/*
var botaoCadastrar = document.getElementById("botao");

function cadastrar(){
    let filme = document.getElementsById("nome");
    let link = document.getElementById("link");

    if(filme.value === ""){
        console.error("Nome inválido");
    }

}


botaoCadastrar.onclick(cadastrar());
*/

let listaDeFilmes = [
    'https://br.web.img3.acsta.net/pictures/14/08/11/13/34/537036.jpg',
    'https://img.elo7.com.br/product/original/39B7AE4/quadro-interestelar-a3-com-vidro-quadro-maritimo.jpg',
    'https://br.web.img3.acsta.net/pictures/210/140/21014024_20130619225537406.jpg',
    'https://ingresso-a.akamaihd.net/img/cinema/cartaz/6429-cartaz.jpg',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/Butterflyeffect_poster.jpg/240px-Butterflyeffect_poster.jpg',
    'https://upload.wikimedia.org/wikipedia/pt/d/d4/Ready_Player_One_%28filme%29.png'
  ]
  
  let listaDeTitulos = [
    'Relatos Selvagens',
    'Interestelar',
    'Truque de mestre',
    'Cantando na Chuva',
    'Efeito Borboleta',
    'Jogador Nº 1'
  ]

  let catalogo = document.querySelector('#catalogo-filmes');
  let i = 0;
  let erro = document.querySelector('#erro')

  for(i; i < listaDeFilmes.length; i++){
    catalogo.innerHTML += `<div>
        <img src=${listaDeFilmes[i]}>
        <p class="texto">${listaDeTitulos[i]}</p>
    </div>
    `
  }