function addItemToStorage(name, calories, fat, protein) {
    let item = { name, calories, fat, protein };
    localStorage.setItem(name, JSON.stringify(item));
}

function removeItemFromStorage(name) {
    localStorage.removeItem(name);
}

fetch("./data.json")
    .then(response => response.json())
    .then(snacksDessert => loadFood(snacksDessert));

function loadFood(snacksDessert) {
    var CardSnacksDessert = document.getElementById("col");
    var cards = [];
    for (var i = 0; i < snacksDessert.snacks_dessertData.length; i++){
        let name = snacksDessert.snacks_dessertData[i].food;
        let calories = snacksDessert.snacks_dessertData[i].calories;
        let fat = snacksDessert.snacks_dessertData[i].fat;
        let protein = snacksDessert.snacks_dessertData[i].protein;
        let url = snacksDessert.snacks_dessertData[i].url;

        let card = "card" + i.toString();

        let AddCardSnacksDessert = document.createElement("div");
        AddCardSnacksDessert.classList.add("col");
        AddCardSnacksDessert.innerHTML = `
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
        CardSnacksDessert.appendChild(AddCardSnacksDessert);
        let ccard = document.getElementById(card);
        cards.push(ccard);

        console.log(card);
    }
    console.log(cards);
}