function addItemToStorage(name, calories, fat, protein) {
    let item = { name, calories, fat, protein };
    localStorage.setItem(name, JSON.stringify(item));
}

function removeItemFromStorage(name) {
    localStorage.removeItem(name);
}

fetch("./data.json")
    .then(response => response.json())
    .then(dinner => loadFood(dinner));

function loadFood(dinner) {
    var CardDinner = document.getElementById("col");
    var cards = [];
    for (var i = 0; i < dinner.dinnerData.length; i++){
        let name = dinner.dinnerData[i].food;
        let calories = dinner.dinnerData[i].calories;
        let fat = dinner.dinnerData[i].fat;
        let protein = dinner.dinnerData[i].protein;
        let url = dinner.dinnerData[i].url;

        let card = "card" + i.toString();

        let AddCardDinner = document.createElement("div");
        AddCardDinner.classList.add("col");
        AddCardDinner.innerHTML = `
            <div id="${card}" class="card shadow-sm">
                <img src="${url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text"><strong>${name}</strong></p>
                    <ul>
                        <li>Calories: ${calories}</li>
                        <li>Fat: ${fat} g</li>
                        <li>Protein: ${protein} g</li>
                    </ul>
                    <div class="text-center">
                        <button type="button" class="btn btn-primary" onclick="addItemToStorage('${name}', ${calories}, ${fat}, ${protein})">Add</button>
                        <button type="button" class="btn btn-danger" onclick="removeItemFromStorage('${name}')">Remove</button>
                    </div>
                </div>
            </div>
        `;
        CardDinner.appendChild(AddCardDinner);
        let ccard = document.getElementById(card);
        cards.push(ccard);

        console.log(card);
    }
    console.log(cards);
}