let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'JAPANESE ABALONE SASHIMI',
        image: '../image/Shashimisushi/shashimisushi0.jpg',
        price: 738000
    },
    {
        id: 2,
        name: 'SSMALL OCTOPUS',
        image: '../image/Shashimisushi/shashimisushi1.jpg',
        price: 680000
    },
    {
        id: 3,
        name: 'MIXED VINEGAR OCTOPUS',
        image: '../image/Shashimisushi/shashimisushi2.jpg',
        price: 268000
    },
    {
        id: 4,
        name: 'WASABI MARINATED OCTOPUS',
        image: '../image/Shashimisushi/shashimisushi3.jpg',
        price: 890000
    },
    {
        id: 5,
        name: 'RAW SALMON',
        image: '../image/Shashimisushi/shashimisushi4.jpg',
        price: 990000
    },
    {
        id: 6,
        name: 'TUNA, SALMON, RAW SEA CLAMS AND ASSORTED SUSHI RICE',
        image: '../image/Shashimisushi/shashimisushi5.jpg',
        price: 238000
    },
];

let listCards  = [];


function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="../img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}