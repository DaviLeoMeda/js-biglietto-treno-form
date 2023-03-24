

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



    // let standardprice = (kilometraggio * 0.21);

    // if (eta < 18) {
    //     let standardprice *= 0.8


    // if (eta > 17 && eta < 65) {

    //     let normalprice = (kilometraggio * 0.21);
    //     let roundedprice = normalprice.toFixed(2);
    //     document.getElementById("trainprice").innerHTML = roundedprice;
    // }
    // else if (eta < 18) {
    //     let normalprice = ((kilometraggio * 0.21) * 0.8);
    //     let roundedprice = normalprice.toFixed(2);
    //     document.getElementById("trainprice").innerHTML = roundedprice;
    // }

    // else if (eta > 65) {
    //     let normalprice = ((kilometraggio * 0.21) * 0.6);
    //     let roundedprice = normalprice.toFixed(2);
    //     document.getElementById("trainprice").innerHTML = roundedprice;

    // }

    document.getElementById("nome").innerHTML = `<p>Benvenuta/o ${nomination}</p>`;
    document.getElementById("prezzo").innerHTML = `<p>Il prezzo del biglietto è di ${price.toFixed(2)} €</p>`;

    console.log(nomination, kilometraggio, eta, price.toFixed(2));
}


