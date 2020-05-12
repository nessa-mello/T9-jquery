/*
    Liga e Desliga - Versão JQuery

  - Altere o background do body, o título da página e o gif da imagem quando o usuário clicar no botão
  - Você pode criar uma função "changeBg" que será responsável pela lógica dessa alteração
  - Extra: Modifiquem o estilo da página para ela ficar com a sua cara!
*/

$(Document).ready (function() {

  const bodyColor = $('body')
  bodyColor.css('background', 'magenta')

  //if para o h1 voltar pra ligado
  function changBg() {
    if(bodyColor[0].style.background == 'yellow') {
    $('body').css('background', 'black');
    $('h1')
    .css('color', 'white')
    .text('Desligado')
    $('.imagem').attr('src', "https://media.giphy.com/media/3oJtg0Ex1lO37eySD6/giphy.gif")
  } else {
    $('body').css('background', 'yellow');
    $('h1')
    .css('color', 'black')
    .text('Ligado')
    $('.imagem').attr('src', "https://media.giphy.com/media/3KVRMtLXfORVosk6TW/giphy.gif")
  }
}
$('#botao').click(function() {
  changeBg()
})

// // ou
// $('#botao').click(changeBg)
// ])
// Outra forma de resolver

$(document).ready(function( {

})