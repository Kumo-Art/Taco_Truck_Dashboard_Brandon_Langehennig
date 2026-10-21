// ----- data -----

const menu = [
  { name: "Carne asada",              price: 3.50, spicy: false, soldOut: false },
  { name: "Al pastor",                price: 3.75, spicy: true,  soldOut: false },
  { name: "Chicken, when we have it", price: 4.50, spicy: false, soldOut: true  },
  { name: "Just the meat",            price: 3.00, spicy: false, soldOut: false }
];




// ----- elements -----

const statusLine = document.getElementById("status");
const openButton = document.getElementById("open-button");
const newLocation = document.getElementById("new-location");
const setButton = document.getElementById("set-button");
const locationList = document.getElementById("location-list");
const menuList = document.getElementById("menu-list");
const totalSold = document.getElementById("total-sold");
// ----- functions -----





// ----- listeners -----

openButton.addEventListener("click", function (){
      statusLine.textContent = "Open";
      statusLine.classList.add("open");
});

const location = document.createElement("li");
      location.textContent = newLocation;

setButton.addEventListener("click", function (event){
      console.log(event.target.tagName);
      locationList.appendChild(location);

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