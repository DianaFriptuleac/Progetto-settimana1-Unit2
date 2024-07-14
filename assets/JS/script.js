window.onscroll = function() {stickyNav()};

function stickyNav() {
    var header = document.getElementById("navbar");
    var getS = document.getElementById("button")

    if (window.header > 380) { /* Cambia colore quando si scrolla verso il basso */
        header.style.backgroundColor = "#fff";
        getS.style.backgroundColor = "#1a8917"
    } else {
        header.style.backgroundColor = "#ffc017"; // sfondo originale
        getS.style.backgroundColor = "#181919"
    }
}