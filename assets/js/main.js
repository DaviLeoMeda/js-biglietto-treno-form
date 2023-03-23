

function erogazioneBiglietti() {

    let nomination = document.getElementById("namesurname").value;
    let kilometraggio = document.getElementById("kilometraggio").value;
    let eta = document.getElementById("eta").value;

    console.log(nomination, kilometraggio, eta);

    let price = (kilometraggio * 0.21);

    if (eta < 18) {
        price *= 0.8;
    }

    else if (eta > 65) {
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

}

console.log(nomination, price);

document.getElementById("nome").innerHTML = `<p>Benvenuta/o ${nomination}</p>`;
document.getElementById("price").innerHTML = `<p>Il prezzo del biglietto è di ${price.toFixed(2)} €</p>`;
