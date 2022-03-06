/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';


document.querySelector("#btn").addEventListener("click", show);
function show(e){
    e.preventDefault();
    fetch("https://api.github.com/users")
    .then(function(file){return file.json()})
    .then(function(file){
        console.log(file);
        file.forEach((element) => {
            let userBlock = document.createElement("div");
            let img = document.createElement("img");
            let logIn = document.createElement("p");
            img.src = element.avatar_url;
            logIn.textContent = element.login;
            document.querySelector("#output").append(userBlock);
            document.querySelector("#output > div:last-child").append(img);
            document.querySelector("#output > div:last-child").append(logIn);
            document.querySelector("#message").style.display = "none";
        });
    })
}