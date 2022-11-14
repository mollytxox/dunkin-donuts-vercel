
const shopitems = [
  {
    id: 0,
    name: "Biscuit Crumb",
    type: "donut",
    image_url: "img/donut1.png",
    description: "Vanilla donut base topped with chocolate and biscuit crumbs."
  },
  {
    id: 1,
    name: "Pink Sprinkle",
    type: "donut",
    image_url: "img/donut2.png",
    description: "Delicious donut base topped with pink icing and sprinkles!"
  },
  {
    id: 2,
    name: "Apple Crumble",
    type: "donut",
    image_url: "img/donut3.png",
    description: "Our Apple Crumble donut will have you switching from the real dessert."
  },
  {
    id: 3,
    name: "Iced Frappe",
    type: "drink",
    image_url: "img/drink1.png",
    description: "Try our delicious iced Frappe topped with cream and chocolate swirl."
  },
  {
    id: 4,
    name: "Pink Lemonade",
    type: "drink",
    image_url: "img/drink2.png",
    description: "Our Pink Lemonade is perfect to quench that summer thirst."
  },
  {
    id: 5,
    name: "Cold Brew",
    type: "drink",
    image_url: "img/drink3.png",
    description: "New in, Cold Brew! Your favourite coffee, just served cold."
  },
  {
    id: 6,
    name: "Choc Cookie",
    type: "cookie",
    image_url: "img/cookie2.png",
    description: "Chocolate Chip cookies, what else could you want with your morning coffee?"
  },
  {
    id: 7,
    name: "Cinnamon Roll",
    type: "cookie",
    image_url: "img/cookie1.png",
    description: "Cinnamon Rolls, a beloved sweet treat!"
  },
  {
    id: 8,
    name: "Caramel Cookie",
    type: "cookie",
    image_url: "img/cookie3.png",
    description: "A delicious twist on the classic chocolate chip cookie."
  },
  {
    id: 9,
    name: "Butter Croissant",
    type: "croissant",
    image_url: "img/croissant1.png",
    description: "Our Croissants are heavenly."
  },
  {
    id: 10,
    name: "Chocolate Croissant",
    type: "croissant",
    image_url: "img/croissant2.png",
    description: "Why have a plain Croissant when you could have a chocolate Croissant!"
  },
  {
    id: 11,
    name: "Raspberry Croissant",
    type: "img/croissant3.png",
    image_url: "https://www.dunkin.co.uk/wp-content/uploads/2020/09/Dunkin-Raspberry-Croissant.png",
    description: "A fruity twist on a classic pastry dessert."
  },
];

const result = document.getElementById("shop-container");
showAllFood();


function showAllFood(){
  for (let i = 0; i < shopitems.length; i++) {
    result.innerHTML += `
      <div class="item-box1">
        <img id="${shopitems[i].id}" class="donutimage" src="${shopitems[i].image_url}" alt="${shopitems[i].name}">
        <p class="box-text">${shopitems[i].name}<p>
      </div>
    `
  }
}


// ------------filtering via type---------

const refineBtn = document.getElementById("refine-button");
const notifications = document.getElementById("notifications");


refineBtn.onclick = function(){
  filterType();
}

function filterType() {
  // reset our list of food
  result.innerHTML = "";
  // grab the checked boxes
  let checkedBoxes = document.querySelectorAll("input[type=checkbox]:checked");

// declare an array to contain all the checked types
  const selectedType = [];

  for (let i = 0; i < checkedBoxes.length; i++) {
    // grab each individual type value
    selectedType.push(checkedBoxes[i].value);
  }

  if (selectedType.length == 0 ) {
    showAllFood();
    notifications.innerHTML = `
    <div class="alert">Showing all food items</div>
    `
  } else {

    notifications.innerHTML = "";
    notifications.innerHTML = `
    <span class="type-preface">Showing food types: </span>
    `
    for (let i = 0; i < selectedType.length; i++) {
      notifications.innerHTML += `
      <span class="alert-type">${selectedType[i]}</span>
      `
    }

    for (let i = 0; i < selectedType.length; i++) {

      if(selectedType[i] == "donut") {

        for (let i = 0; i < shopitems.length; i++) {
          if(shopitems[i].type == "donut") {
            generateType(i);
          } //end if statement
        } //end loop checking all types
      } //end of if statement

      if(selectedType[i] == "drink") {

        for (let i = 0; i < shopitems.length; i++) {
          if(shopitems[i].type == "drink") {
            generateType(i);
          } //end if statement
        } //end loop checking all types
      } //end of if statement

      if(selectedType[i] == "cookie") {

        for (let i = 0; i < shopitems.length; i++) {
          if(shopitems[i].type == "cookie") {
            generateType(i);
          } //end if statement
        } //end loop checking all types
      } //end of if statement

      if(selectedType[i] == "croissant") {

        for (let i = 0; i < shopitems.length; i++) {
          if(shopitems[i].type == "croissant") {
            generateType(i);
          } //end if statement
        } //end loop checking all types
      } //end of if statement

    }// end of for loop
  } //end of the else statement
} // end of filter type function

function generateType(index){
  result.innerHTML += `
  <div class="item-box1">
    <img id="${shopitems[index].id}" class="donutimage" src="${shopitems[index].image_url}" alt="${shopitems[index].name}">
    <p class="box-text">${shopitems[index].name}<p>
  </div>
  `
}


// MODAL POP UPS ---------------------------------------------------------------

let modalBtns = document.getElementsByClassName("donutimage");
let descriptionModal = document.getElementById("description-modal");
let modalContent = document.getElementById("description-modal-content");
let closeBtn = document.getElementById("close-button");
let descriptionElement = document.getElementById("description-data");
const plusBtn = document.getElementById('plus-button-div');
const newFoodCloseBtn = document.getElementById("newfood-close-button");

for (let i = 0; i < modalBtns.length; i++) {
  modalBtns[i].onclick = function() {
    // this part runs when the button is clicked
    console.log(this.id);
    let buttonId = this.id;
    // now we run the open modal function
    // it will look for the function and run it
    opendescriptionModal(buttonId);
  }
}

generateButtons();

closeBtn.onclick = function(){
  closedescriptionModal();
}

newFoodCloseBtn.onclick = function(){
  closeNewFoodModal();
}


function opendescriptionModal(id) {
  descriptionModal.classList.toggle("active");
  descriptionElement.innerHTML = `${shopitems[id].description}`;
}


function closedescriptionModal() {
  modalContent.classList.toggle("active");
  let delayAnimation = setTimeout(fadeIn, 300);
  function fadeIn(){
    descriptionModal.classList.toggle("active");
  }
}


// this function will collect all of the buttons and will check if they are being clicked on
function generateButtons(){
  for (let i=0; i < modalBtns.length; i++){
    // loop over all the modal buttons
    // console.log(modalButtonsArray[i]);
    modalBtns[i].onclick = function(){
      // console.log("you clicked on a button");
      // put the buttons id into a variable
      let currentButtonId = this.id;
      // let currentButtonId = this
      opendescriptionModal(currentButtonId);
    }
  }
}


// -----------------SEARCH FUNCTION------------------

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

// this variable will become true if we find an artist
let foodFound;

searchBtn.onclick = function() {
  filterSearchWord();
}

function filterSearchWord(){
  // get the search word
  let searchString = searchInput.value;
  // check if this search word was empty
  if (searchString == ""){
    notifications.innerHTML = `
    <div class="type-preface">Please enter a search term...</div>
    `
  } else {
    runSearch(searchString);
  }
}

function runSearch(string){
  // artist is not found by default, only gets turned on if there's a match
  foodFound = false;
  let foodFoundNumber = 0;
  // console.log(string);
  // console.log("You ran a search");
    result.innerHTML = "";

    for (let i = 0; i < shopitems.length; i++) {
      // lower case string is the user search, and changed to lower case
      let lowercaseSearchString = string.toLowerCase();
      // turn each iteration of an artist name into a variable, that is lower case
      let lowercaseFoodName = shopitems[i].name.toLowerCase();
      // declare a variable called match, it will become true if the artist name includes anything within the search term
      let match = lowercaseFoodName.includes(lowercaseSearchString);
      if (match == true) {
        foodFoundNumber++;
        foodFound = true;
        generateType(i);
        if (foodFoundNumber == 1) {
          notifications.innerHTML = `
          <div class="type-preface"> Your search term "${string}" returned 1 result: </div>
          `
        } else if (foodFoundNumber > 1){
        notifications.innerHTML = `
        <div class="type-preface"> Your search term "${string}" returned ${foodFoundNumber} results. </div>
        `
        }
      }
    }

  // } //end of loop which checks if a artist name matches
  if (foodFound == false){
    notifications.innerHTML = `
    <div class="type-preface">Your search term "${string}" returned no results.</div>
    `
  }
}

// DUNKIN TITLE ANIMATION

var string = "What will you be dunkin?";
var str = string.split("");
var el = document.getElementById('hero-title');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
var running = setTimeout(animate, 90);
})();


// ADD NEW FOOD ITEM MODAL ----------------------------------------

function openNewFoodModal() {
  newFoodModal.classList.toggle("active");
}

function closeNewFoodModal() {
  newFoodContent.classList.toggle("active");
  let delayAnimation = setTimeout(fadeIn, 300);
  function fadeIn(){
    newFoodModal.classList.toggle("active");
  }
}

plusBtn.onclick = function(){
  openNewFoodModal();
}


// ADDING NEW FOOD ITEM

const nameInput = document.getElementById('food-name');
const typeInput = document.getElementById('dropdown');
const descriptionInput = document.getElementById('food-description');
const imageInput = document.getElementById('food-imageurl');
const submitBtn = document.getElementById('sumbit-button');
const newFoodModal = document.getElementById('newfood-modal-overlay');
const newFoodContent = document.getElementById('newfood-modal-content');


submitBtn.onclick = function() {
newFoodModal.classList.toggle("active");

    let newname = nameInput.value;
    let newtype = typeInput.value;
    let newdescription = descriptionInput.value;
    let newimage = imageInput.value;

    let newFood = {
      id: shopitems.length,
      name: newname,
      type: newtype,
      image_url: newimage,
      description: newdescription
    }

    shopitems.push(newFood);

    result.innerHTML = "";
    showAllFood();
    generateButtons();

}
