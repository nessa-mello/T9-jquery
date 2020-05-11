//jquery
$(document).ready(function( ) {
//chamando pela tag
$('h1').css('color', '#66')
$('h1').css('font-size','50px')
$('h1').hide();
$('h1').delay('2000'); //20000ms = 2s
$('h1').fadeIn('slow');
$('h1').text('Olá meninas')



//ou podemos fazer um encadeamento em bloco, chamando o mesmo CSS dar um . e colocar a outra ação.

$('h1')
.css('color', '#f66')
.hide()
.delay('5000')
.fadeIn('slow')
.text('Surpresa!')

//Posso adicionar funções, como por exemplo um evento de click


//chamando pela classe
$('.item1').click(function() {
    $('body').css('background', 'magenta')
    $('h1').css('color', '#fff')
});

//sintaxe para receber propriedades e valores de uma estrutura de objetos
$('li').css({
    color: 'red',
    display: 'flex',
    padding: '20px',
}) 

//chamando pelo id
$('#item2').css('color', 'yellow')


$('*').css('margin-left' '200px')

$('h1, #item2, .item1').css('border-bottom', '3px solid blue')


//exemplos css de parentesco
$('div > p')
$('td, th')

})

