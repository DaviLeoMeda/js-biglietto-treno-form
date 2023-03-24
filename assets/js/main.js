

function erogazioneBiglietti() {

    let nomination = document.getElementById("namesurname").value;
    let kilometraggio = parseFloat(document.getElementById("kilometraggio").value);
    let eta = document.getElementById("eta").value;

    let price = (kilometraggio * 0.21);

    console.log(nomination, kilometraggio, eta, price);



    if (eta == `under18`) {
        price *= 0.8;
    }

    else if (eta == `over65`) {
        price *= 0.6;


    }




    document.querySelector(".biglietto").classList.toggle('d-none');


    document.getElementById("nome").innerHTML = `<p>Benvenuta/o ${nomination}</p>`;
    document.getElementById("eta").innerHTML = `<p>Biglietto ${eta}</p>`;
    document.getElementById("wagon").innerHTML = `<p> ${randomNumberWagon(1, 10)}</p>`
    document.getElementById("codeCp").innerHTML = `<p> ${randomNumberWagon(1, 10000)}</p>`
    document.getElementById("prezzo").innerHTML = `<p>Il prezzo è ${price.toFixed(2)} €</p>`;

    console.log(nomination, kilometraggio, eta, price.toFixed(2));
}

function randomNumberWagon(min, max) {
    return Math.floor(Math.random() * max) + min;
}
