$(document).ready(function(){
    loadscreen();
});



function loadscreen() {
    hello = $(document.createElement('button')).text('hello').appendTo('body');
    
    hello.on('click', function() {
        alert('hello');
    })
}