function addItemToStorage(name, calories, fat, protein) {
    let item = { name, calories, fat, protein };
    localStorage.setItem(name, JSON.stringify(item));
}

function removeItemFromStorage(name) {
    localStorage.removeItem(name);
}

fetch("./data.json")
    .then(response => response.json())
    .then(lunch => loadFood(lunch));

function loadFood(lunch) {
    var CardLunch = document.getElementById("col");
    var cards = [];
    for (var i = 0; i < lunch.lunchData.length; i++){
        let name = lunch.lunchData[i].food;
        let calories = lunch.lunchData[i].calories;
        let fat = lunch.lunchData[i].fat;
        let protein = lunch.lunchData[i].protein;
        let url = lunch.lunchData[i].url;

        let card = "card" + i.toString();

        let AddCardLunch = document.createElement("div");
        AddCardLunch.classList.add("col");
        AddCardLunch.innerHTML = `
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
        CardLunch.appendChild(AddCardLunch);
        let ccard = document.getElementById(card);
        cards.push(ccard);

        console.log(card);
    }
    console.log(cards);
}