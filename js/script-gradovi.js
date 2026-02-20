// prozovi univerzalno - u onClick u html dokumentu upiši naziv arraya za imena
function prozovi(predmetImena) {
    // varijabla unutar funkcije
    var ucenici = predmetImena;

    var min = 0,
        max = ucenici.length - 1, // maksimalan broj učenika u arrayu
        nasumicno = Math.floor(Math.random() * (max - min + 1)) + min, // random broj
        ucenik = ucenici[nasumicno]; // broj učenika
    // provjeri ako ima imena u arrayu
    if (ucenici.length > 0) { // sve dok ima imena u arrayu
        ucenici.splice(nasumicno, 1); // izbacuje odabrano ime po rednom broju
        document.querySelector("#ucenik").innerHTML = ucenik; // ispis odabranog učenika
        document.querySelector("#neispitani").innerHTML = ucenici.join(", "); // prikaz neispitanih
    } else { // kad nestane imena
        document.querySelector("#ucenik").innerHTML = "Nema više gradova";
        document.querySelector("#jos-nisu-pitani").innerHTML = " ";
        document.querySelector("#neispitani").innerHTML = " ";
        return;
    }
}
