// console.log("Досвидания!");

// let name = "Айнур";
// let age = 19
// console.log(name);
// name = name + "a";
// console.log(name);
// console.log(age);
// age = age + 1;
// console.log(age);

// let text = document.querySelector(".text");

// let input = document.querySelector(".name");

// let butten = document.querySelector("#button");

// let textArray = document.querySelectorAll(".text");



// butten.addEventListener("click", function () {
//    textArray.forEach(function(card, index) {
//     card.textContent = "Карточка №" + (index + 1)
//    })
// }
// )

// textArray.forEach(function (card, index) {

//     card.addEventListener("click", function (){

//         textArray.forEach(function (card, index) {
//             card.classList.remove('blue')

//         })

//         card.classList.add('blue')
//     }
// )

// })


// let result = document.querySelector(".result");

// let buttons = document.querySelectorAll(".button");

// buttons.forEach(addEvent);

// function addEvent(card, index){
//     card.addEventListener("click", showMessage);
// }

// function showMessage(){
//     result.textContent = "next";
//     result.style.color = "red";
// }

// let home = ["дом1", "дом2", "дом3"]

// home.push ("никита")

// home.pop()

// if (home.includes("никита")) {
//     console.log("никита в доме")
// } else {
//     console.log("никиты в доме нет")
// }

// console.log(home)

// let homes = ["дом1", "дом2", "дом3"];
// let button = document.querySelector("#button");
// let home = document.querySelector(".home");

// button.addEventListener("click", addhome)

// renderHTML()

// function addhome() {
//     let home = Math.random().toString(36)
//     homes.push(home)
//     renderHTML()
// }

// function renderHTML() {
//     home.innerHTML = ""
//     homes.forEach(function(card, index) {
//         console.log(card)
//         home.innerHTML += "<p>"+ card + " под новером " + (index + 1) +"</p>"
//     })
    
// }


// let Sharhan = {
//     age: 23,
//     city: "Almaty"
// }

// let Ainura = {
//     age: 18,
//     city: "Astana"
// }

// console.log(`Привет меня зовут Айнура мне ${Ainura.age} лет`  )


// let menuItems = document.querySelector(".menu-items")
// let menu = [
//     {
//         title: "оливье",
//         products: ["калбаса", "огурцы", "кукуруза"],
//         price: 30000
//     }
// ]



//  const homes = [Bolashak,Сарыарка,Столичный];

//  const streets = [улица Академика Сатпаева, улица Ломова, улица Астана];
 
//  const famousPeople = [Каныш Сатпаев, Машхур Жусус Копеев , Султанмахмут Торайгыров];

// let homes = [
//     { name: "Болашак",
//     address: "Павлодар" },
//     { name: "Сарыарка", 
//     address: "Павлодар" },
//     { name: "Столичный", 
//     address: "Павлодар" }
// ];

// let streets = [
//     { name: "Улица Академика Сатпаева", 
//     district: "Центр" },
//     { name: "Улица Ломова", 
//     district: "Центр" },
//     { name: "Улица Астана", 
//     district: "Центр" }
// ];

// let famousPeople = [
//     { name: "Каныш Сатпаев", 
//     profession: "Геолог" },
//     { name: "Мәшһүр Жүсіп Көпеев",
//     profession: "Поэт" },
//     { name: "Султанмахмут Торайгыров", 
//     profession: "Поэт" }
// ];




// let homesBlock = document.querySelector("#homes");

// homes.forEach(function(home) {
//     homesBlock.innerHTML += `
//         <div class="card">
//             <h3>${home.name}</h3>
//             <p>${home.address}</p>
//         </div>
//     `;
// });

// let streetsBlock = document.querySelector("#streets");

// streets.forEach(function(street) {
//     streetsBlock.innerHTML += `
//         <div class="card">
//             <h3>${street.name}</h3>
//             <p>${street.district}</p>
//         </div>
//     `;
// });

// let peopleBlock = document.querySelector("#famousPeople");

// famousPeople.forEach(function(person) {
//     peopleBlock.innerHTML += `
//         <div class="card">
//             <h3>${person.name}</h3>
//             <p>${person.profession}</p>
//         </div>
//     `;
// });



// function addEvent(card, index) {
//     card.addEventListener("click", function() {
//         card.style.background = "red";
//     });
// }












let cardMenu = [
    {title: "Шакшука",
    products: ["яйца", "молоко", "помидоры"],
    price: 12000
    },
    {title: "оливье",
    products: ["колбаса", "огурцы", "кукуруза"],
    price: 45000
    }
];

let menus = document.querySelector(".card-bolvanka");
let priceElement = document.querySelector("#price");
let buttons = document.querySelector(".buttons");
let titleElement = document.querySelector("#title");

let showAddMenuButton = document.querySelector("#showAddMenu");
let addMenuButton = document.querySelector("#addMenu");

function render(){
    menus.innerHTML = ``
    let newCardMenu = JSON.parse(localStorage.getItem("cardMenu"))
    let filterCardMenu = filter(newCardMenu)
    
    filterCardMenu.forEach(function(menu) {
        console.log(menu)
        let title = menu.title
            let products = `<div class="card-menu-products">`
        menu.products.forEach(function(product) {
            products += `<span>${product}</span>`
        })
        
        products += `</div>`
        let price = menu.price 

        menus.innerHTML += `
        <div class="card-menu">

        <h3 class="card-menu-title">${title}</h3>
        ${products}
        <span class="card-menu-price">Цена - ${price}</span>
    </div>
    `
    }) 
}

function filter(cardMenu){
    let filterCardMenu = []
    let price = priceElement.value 
    let title = titleElement.value 
    
    filterCardMenu = cardMenu.filter(function(menu) {
         console.log(menu)
        let priceFlag = menu.price > price
        let titleFlag = menu.title === title

        return priceFlag
        // цена товара должна быть меньше инпута
    })
    return filterCardMenu
}

function showAddMenu (){
    let addMenuContainer = document.querySelector('.add-menu')
    addMenuContainer.classList.remove('d-none')
}

render();

function newMenu(){
    let newProducts = document.querySelector("#forma-products").value
    let newPrice = document.querySelector("#forma-price").value
    let newTitle = document.querySelector("#forma-title").value
    let newCardMenu = JSON.parse(localStorage.getItem("cardMenu"))

    console.log("лог для продуктов")
    console.log(newProducts)

    newCardMenu.push({
        title: newTitle,
        price: newPrice,
        products: [newProducts]
    })
    localStorage.setItem("cardMenu", JSON.stringify(newCardMenu))
    console.log(localStorage.getItem("cardMenu"))
    render();
}

function setLocal(key, value){
    return localStorage.setItem(key, value)
}

function getLocal(key) { // получить
    console.log(localStorage.getItem(key))
}

localStorage.setItem("item", cardMenu)
console.log(localStorage.getItem("cardMenu"))



priceElement.addEventListener('input', render)
titleElement.addEventListener('input', render)

showAddMenuButton.addEventListener('click', showAddMenu)
addMenuButton.addEventListener('click', addMenu)
addMenuButton.addEventListener('click', newMenu)


