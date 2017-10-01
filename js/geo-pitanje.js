$("document").ready(function() {
    var template = $("#geografija").html();
    var renderer = Handlebars.compile(template);

    var result = renderer({
        "pitanja": [{
            "id": 1,
            "pitanje": "Glavni grad Hrvatske je:",
            "odgovor": ["Rijeka", "Zagreb\t", "Osijek", "Split"],
        }, {
            "id": 2,
            "pitanje": "Pod UNESCO-vom zaštitom je:",
            "odgovor": ["Dubrovnik\t", "Zadar", "Pag", "Novalja"],
        }, {
            "id": 3,
            "pitanje": "Po zadnjem popisu, u Hrvatskoj je oko:",
            odgovor: ["4,8 mil. st", "4,5 mil. st", "4,2 mil. st\t", "4,1 mil. st"],
        }, {
            "id": 4,
            "pitanje": "Izbaci uljeza:",
            odgovor: ["Vransko jezero", "Plitvička jezera\t", "Papuk", "Kopački rit"],
        }, {
            "id": 5,
            "pitanje": "Zapadna obala Jadrana je razvedenija od istočne.",
            odgovor: ["Točno", "Netočno\t"],
        }, {
            "id": 6,
            "pitanje": "Sjeverni dio Jadrana je plići od južnog.",
            odgovor: ["Točno\t", "Netočno"],
        }, {
            "id": 7,
            "pitanje": "Oko 3/4 Jadrana je pliće od:",
            odgovor: ["100 m", "200 m \t", "300 m", "400 m"],
        }, {
            "id": 8,
            "pitanje": "Jadransko more je nastalo prije 15 000 godina.",
            odgovor: ["Točno", "Netočno\t"],
        }, {
            "id": 9,
            "pitanje": "Prosjećna slanoća Jadranskog mora je:",
            odgovor: ["18 ‰", "28 ‰", "38 ‰\t", "48 ‰"],
        }, {
            "id": 10,
            "pitanje": "Južni dio Jadrana je slaniji od sjevernog.",
            odgovor: ["Točno\t", "Netočno"],
        }, {
            "id": 11,
            "pitanje": "Jugo stvara veće valove od bure.",
            odgovor: ["Točno\t", "Netočno"],
        }, {
            "id": 12,
            "pitanje": "Rijeke jadranskog slijeva su duže od rijeka crnomorskog slijeva.",
            odgovor: ["Točno", "Netočno\t"],
        }, {
            "id": 13,
            "pitanje": "Izbaci uljeza.",
            odgovor: ["Sava", "Neretva\t", "Kupa", "Dunav"],
        }, {
            "id": 14,
            "pitanje": "Najveće hrvatsko jezero je:",
            odgovor: ["Jezero Peruća", "Vransko jezero\t", "Prokljansko jezero", "Lokvarsko jezero"],
        }]
    }); // end renderer

    $("#predlozak").html(result);
    // tocan odgovor
    $(".odgovor:contains('\t')").addClass("tocno");


}); // end jQuery

var pitanje = document.querySelector(".pitanje"),
    i = 0;


this.addEventListener("click", function() {
    var odabrani = event.target;
    if (odabrani.classList.contains("tocno") && odabrani.classList.contains("btn")) {
        odabrani.style.backgroundColor = "green";
        odabrani.style.color = "white";
        odabrani.disabled = true;
        i++;
    } else if (odabrani.classList.contains("btn")) {
        odabrani.style.backgroundColor = "red";
        odabrani.style.color = "white";
        odabrani.disabled = true;
        i++;
    }
    document.querySelector(".pokusaj").innerHTML = i + "/14";
    document.querySelector(".uspjesnost").innerHTML = ((14 / i) * 100).toFixed(0) + "%";
}.bind(pitanje));