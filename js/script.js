// footer copyleft (nova godina se mjenja automatski)
var copyleft = document.querySelector(".copyleft");
copyleft.innerHTML = "Copyleft <span class='cl'>&copy;</span> " + new Date().getFullYear() + ". - <a href='index.html' style='color: rgb(51, 51, 51); text-decoration: none'>Danijel Gavranović, prof.</a>";


// ------- Propeller Ripple Effect component js function ------- //
$(document).ready(function() {

    $(".ripple-effect").on('mousedown touchstart', function(e) {
        var rippler = $(this);
        $('.ink').remove();
        // create .ink element if it doesn't exist
        if (rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }
        var ink = rippler.find(".ink");
        // prevent quick double clicks
        ink.removeClass("animate");
        // set .ink diametr
        if (!ink.height() && !ink.width()) {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({
                height: d,
                width: d
            });
        }
        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width() / 2;
        var y = e.pageY - rippler.offset().top - ink.height() / 2;
        // set .ink position and add class .animate
        ink.css({
            top: y + 'px',
            left: x + 'px'
        }).addClass("animate");

        setTimeout(function() {
            ink.remove();
        }, 1500);
    });


    // animacija na sličicama
    function animirajSlicice(elem, cls) {
        let e = document.querySelectorAll(elem); // element
        for (let i = 0; i < e.length; i++) { // loop kroz sve iste elemente na stranici
            $(e[i]).mouseenter(function() { // na svaki pojedini element $(e[i]) kad se pređe mišem preko njega..
                $(e[i]).addClass("animated " + cls); // dodaj animaciju (class animate + animacija po želji)
                setTimeout(function resetirajElement() { // restiraj animaciju ...
                    $(e[i]).removeClass(cls); // ... makni odabranu animaciju (class) ...
                }, 1000); // ... nakon 1 sekunde
            });
        }
    }
    // pozivanje animacije na željeni element i sa željenim efektom
    // animirajSlicice(".slika", "shake");

    // privremeno radi ispravnog prikaza linkova u responsive izborniku
    if ($(window).width() <= 756) {
        $(".nav.navbar-nav").removeClass("desno");
    } else {
        $(".nav.navbar").addClass("desno");
    }



});
// dodaje na sve .btn class ripple-effect
function rippleEffect() {
    let ripple = document.querySelectorAll(".portfolio-item"),
        linkovi = document.querySelectorAll("a");

    for (let i = 0; i < ripple.length; i++) {
        ripple[i].classList += " ripple-effect";
    }
    for (let i = 0; i < linkovi.length; i++) {
        linkovi[i].classList += " ripple-effect";
    }
}
rippleEffect();
