// ----- data -----

const menu = [{ name: "Carne asada", price: 3.50, spicy: false, soldOut: false },
    { name: "Al pastor", price: 3.75, spicy: true, soldOut: false },
    { name: "Chicken, when we have it", price: 4.50, spicy: false, soldOut: true },
    { name: "Just the meat", price: 3.00, spicy: false, soldOut: false }];



// ----- elements -----

const statusLine = document.getElementById("status");
const openButton = document.getElementById("open-button");
const newLocation = document.getElementById("new-location");
const setButton = document.getElementById("set-button");
const menuList = document.getElementById("menu-list");
const totalSold = document.getElementById("total-sold");
const addButton = document.getElementById("add-button");
const newItem = document.getElementById("new-item");
const description = document.getElementById("description");
// ----- functions -----

console.log(document);


    function drawMenu() {
  
    
    for (let i = 0; i < menu.length; i++) {
        const row = document.createElement("li");
        row.textContent = `${menu[i].newItem} - ${menu[i].description}`;

        if (menu[i].soldOut === true) {
            row.classList.add("sold-out");
        }

        menuList.appendChild(row);
    }
}






// ----- listeners -----

openButton.addEventListener("click", function (){
      statusLine.textContent = "Open";
      statusLine.classList.add("open");
});




setButton.addEventListener("click", function (){

   const loc = document.createElement("h2");
   loc.textContent = newLocation.value;
   newLocation.appendChild(loc);
   newItem.value = "";
   

});


addButton.addEventListener("submit", function () {
     drawMenu();
});




// ----- run at load -----


