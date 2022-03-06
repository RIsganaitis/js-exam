/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

//test

document.querySelector("form").addEventListener("submit", calculate);
function calculate(e){
    e.preventDefault();
    let paragraphLb = document.createElement("p");
    let paragraphG = document.createElement("p");
    let paragraphOz = document.createElement("p");
    let kg = document.querySelector("#search").value;
    let lb = kg * 2.2046;
    let g = kg / 0.0010000;
    let oz = kg * 35.274;
    document.querySelector("#output").append(paragraphLb);
    document.querySelector("#output").append(paragraphG);
    document.querySelector("#output").append(paragraphOz);
    document.querySelector("#output p:first-of-type").textContent = kg + "kg = " + lb + " lb";
    document.querySelector("#output p:nth-of-type(2)").textContent = kg + "kg = " + g + " g";
    document.querySelector("#output p:nth-of-type(3)").textContent = kg + "kg = " + oz + " oz";
}