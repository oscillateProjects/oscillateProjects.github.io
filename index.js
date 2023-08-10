$(document).ready(function(){
    loadscreen();
});



function loadscreen() {
    hello = $(document.createElement('button')).text('hello').appendTo('body');
    //$('body').append(hello);
}