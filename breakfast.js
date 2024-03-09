function addItemToStorage(name, calories, fat, protein) {
    let item = { name, calories, fat, protein };
    localStorage.setItem(name, JSON.stringify(item));
}

function removeItemFromStorage(name) {
    localStorage.removeItem(name);
}

fetch("./data.json")
    .then(response => response.json())
    .then(breakfast => loadFood(breakfast));

function loadFood(breakfast) {
    var CardBreakfast = document.getElementById("col");
    var cards = [];
    for (var i = 0; i < breakfast.breakfastData.length; i++){
        let name = breakfast.breakfastData[i].food;
        let calories = breakfast.breakfastData[i].calories;
        let fat = breakfast.breakfastData[i].fat;
        let protein = breakfast.breakfastData[i].protein;
        let url = breakfast.breakfastData[i].url;

        let card = "card" + i.toString();

        let AddCardBreakfast = document.createElement("div");
        AddCardBreakfast.classList.add("col");
        AddCardBreakfast.innerHTML = `
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
        CardBreakfast.appendChild(AddCardBreakfast);
        let ccard = document.getElementById(card);
        cards.push(ccard);

        console.log(card);
    }
    console.log(cards);
}

function addItemToStorage(name, calories, fat, protein) {
    let item = { name, calories, fat, protein };
    localStorage.setItem(name, JSON.stringify(item));
}

function removeItemFromStorage(name) {
    localStorage.removeItem(name);
}
