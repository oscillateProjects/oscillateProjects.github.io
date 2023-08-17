$(document).ready(function(){
    
    createScreenLayout();

    createTabs();

    createMainScreen();

    //loadscreen();
});


function createScreenLayout() {

    this.outerBody = $(document.createElement('div')).addClass('outer-body').appendTo('body');

    this.tabs = $(document.createElement('div')).addClass('tabs').appendTo(this.outerBody);

    this.mainScreen = $(document.createElement('div')).addClass('main-screen').appendTo(this.outerBody);

    this.messages = $(document.createElement('div')).addClass('messages').appendTo(this.outerBody);

}

function createTabs() {

    this.tabMainBtn = $(document.createElement('button')).text('main').appendTo(this.tabs);

    this.tabMapBtn = $(document.createElement('button')).text('map').appendTo(this.tabs);

    this.tabAtlasBtn = $(document.createElement('button')).text('atlas').appendTo(this.tabs);
}

function createMainScreen() {

    

}






function loadscreen() {
    this.hello = $(document.createElement('button')).text('hello').appendTo(this.outerBody);
    
    hello.on('click', function() {
        alert('hello world');
    })
}