// ----- data -----

const menu = [];



// ----- elements -----

const statusLine = document.getElementById("status");
const openButton = document.getElementById("open-button");
const newLocation = document.getElementById("new-location");
const setButton = document.getElementById("set-button");
const locationList = document.getElementById("location-list");
const menuList = document.getElementById("menu-list");
const totalSold = document.getElementById("total-sold");
const addButton = document.getElementById("add-button");
const newItem = document.getElementById("new-item");
const description = document.getElementById("description");
// ----- functions -----





// ----- listeners -----

openButton.addEventListener("click", function (){
      statusLine.textContent = "Open";
      statusLine.classList.add("open");
});




newLocation.addEventListener("input", function (){
    console.log(`input: ${newLocation.value}`);
    setButton.disabled = newLocation.value === "";
});


// ----- run at load -----



for (let i = 0; i < menu.length; i++){
    const row = document.createElement("li");
    row.id = `row-${i}`;
    row.textContent = `${menu[i].name} - ${menu[i].price}`;

    if(menu[i].soldOut === true) {
        row.classList.add("sold-out");
    }

    menuList.appendChild(row);
}