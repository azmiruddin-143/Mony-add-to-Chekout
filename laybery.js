
 function allinputvalue(id) {
   let inputvalue =  document.getElementById(id).value; 
    return inputvalue;
 }

 function alltextvalue(id) {
    let textvalue = document.getElementById(id).innerText;
    return textvalue;
 }

 function showform(id) {
    document.getElementById("login-form").classList.add("hidden")
    document.getElementById("cashout-form").classList.add("hidden")
    document.getElementById(id).classList.remove("hidden")
 }