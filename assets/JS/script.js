window.onscroll = function() {navScroll()};

function navScroll() {
    var header = document.querySelector('header')
    var getS = document.getElementById("button")

    if (window.pageYOffset > 380) { 
        header.style.backgroundColor = "#fff"; 
        getS.style.backgroundColor = "#1a8917"
    } else {
        header.style.backgroundColor = "#ffc017"; 
        getS.style.backgroundColor = "#181919"
    }
}
document.addEventListener('DOMContentLoaded',function(){
    window.onscroll = function(){
        navScroll();
    }
})