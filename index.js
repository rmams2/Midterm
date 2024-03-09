fetch("./data.json")
.then(response => response.json())
.then(images => loadImages(images));

function loadImages(images){
    let imageContainer = document.getElementById('imageContainer');
    images.mainPageData.forEach(image => {
        let imageUrl = image.url;
        let imageAlt = image.alt;

        let imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        imageElement.alt = imageAlt;

        imageContainer.appendChild(imageElement);
    });
}

function populateSelectedItems() {
    let selectedItems = Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)));

    let tbody = document.getElementById('selectedItemsTable');

    tbody.innerHTML = '';

    let totalCalories = 0;
    let totalFat = 0;
    let totalProtein = 0;

    selectedItems.forEach((item, index) => {
        let row = `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${item.name}</td>
                <td>${item.calories}</td>
                <td>${item.fat}</td>
                <td>${item.protein}</td>
            </tr>
        `;
        tbody.innerHTML += row;

        totalCalories += parseFloat(item.calories);
        totalFat += parseFloat(item.fat);
        totalProtein += parseFloat(item.protein);
    });

    document.getElementById('totalCalories').innerText = totalCalories.toFixed(2);
    document.getElementById('totalFat').innerText = totalFat.toFixed(2);
    document.getElementById('totalProtein').innerText = totalProtein.toFixed(2);
}

populateSelectedItems();

function clearSelectedItems() {
    localStorage.clear();
    
    document.getElementById('selectedItemsTable').innerHTML = '';

    document.getElementById('totalCalories').innerText = '0';
    document.getElementById('totalFat').innerText = '0';
    document.getElementById('totalProtein').innerText = '0';
}
