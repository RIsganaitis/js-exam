/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
document.querySelector("#btn__element").addEventListener("click", clickCounter);
function clickCounter(e){
    e.preventDefault();
    let node = document.querySelector("#btn__state");
    textContent = node.textContent;
    let count = parseInt(textContent);
    document.querySelector("#btn__state").textContent = count + 1;
}