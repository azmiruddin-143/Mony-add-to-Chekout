



// add money button

document.getElementById("add-btn").addEventListener("click", function (e) {
    e.preventDefault()

    let addinputamount = allinputvalue("admoneyamount-button");
    let addinputpin = allinputvalue("adpincode-button");
    let defoultamount = alltextvalue("defoult-amount")

    if (addinputpin === "22" && addinputamount) {
        let mostamount = parseFloat(addinputamount) + parseFloat(defoultamount);
        let defoultamount2 = document.getElementById("defoult-amount");
        defoultamount2.innerText = mostamount
    }
    else {
        alert("faild")
    }

})



//   cashout money button ///


document.getElementById("cashout-btn").addEventListener("click", function (e) {
    e.preventDefault();
    let cashoutamount = allinputvalue("cashoutamount-button");
    let cashoutpincode = allinputvalue("cashoutpincode-button");
    let defoultamountcas = alltextvalue("defoult-amount")
    
    if (cashoutpincode === "22" && cashoutamount) {
        let finalvalu = parseFloat(defoultamountcas) - parseFloat(cashoutamount);
        let defoultamountcas2 = document.getElementById("defoult-amount");
        defoultamountcas2.innerText = finalvalu;
    }
    else {
        alert("faild")
    }
})



// login button//

document.getElementById("login-button").addEventListener("click", function (e) {
    e.preventDefault()

    let inputnumber = allinputvalue("login-number");
    let inputpin = allinputvalue("login-pin");

    if (inputnumber === "11" && inputpin === "22") {
        console.log("login");

        window.location.href = "/home.html";
    }
    else {
        alert("faild");
    }

})


 

// ....................................................................



document.getElementById("AddMoney").addEventListener("click", function () {
     
    showform("login-form");
})