/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';


fetch("./cars.json")
      .then(function(file){return file.json()})
      .then(function(file){
        console.log(file);
        file.forEach((element) => {
            let manufacturerBlock = document.createElement("div");
            let manufacturer = document.createElement("h2");
            let title = document.createElement("h4");
            manufacturer.textContent = "Brand: " + element.brand;
            let models = element.models;
            title.textContent = "Manufactured models:"
            document.querySelector("#output").append(manufacturerBlock);
            document.querySelector("#output div:last-child").append(manufacturer);
            document.querySelector("#output div:last-child").append(title);
            for(let i = 0; i < models.length; i++){
                let model = document.createElement("span");
                model.textContent = models[i] + ",";
                document.querySelector("#output div:last-child").append(model);
            }
        });
      })




