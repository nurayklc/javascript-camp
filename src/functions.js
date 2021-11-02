function addToCart(quantity, productName = "Elma") {
    console.log("Sepete eklendi "+productName + " ürün. Adet:" + quantity);    
}
addToCart()
addToCart("laptop")
addToCart(10)
addToCart(10, "Armut")

let sayHello = () => {
    console.log("Helloooooooooooo")
}

sayHello()

let sayHello2 = function (params) {
    console.log("Whattttttt")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma", 5, 10)

//Obje oluşturma
let product1 = {productName:"Elma", quantity:5, unitPrice:10}

function addToCart3(product) {
    console.log("Ürün adı: "+product.productName+ " Adedi: "+ product.quantity+ " Birim fiyatı " +product.unitPrice)
}

addToCart3(product1)
let product2 = {productName:"Elma", quantity:5, unitPrice:10}
let product3 = {productName:"Elma", quantity:5, unitPrice:10}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

function addToCart4(parametres) {
    console.log(parametres)
}

let products = [
    {productName:"Elma", quantity:5, unitPrice:10},
    {productName:"Armut", quantity:5, unitPrice:10},
    {productName:"Erik", quantity:5, unitPrice:10}
]

addToCart4(products)

//rest operatörü
function sum(...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total)
}

sum(20,30)
sum(20,30,40)
sum(50,60,70,80)

//spead operatoru
let numbers = [10, 20, 800, 950,230]
console.log(...numbers)
console.log(Math.max(...numbers))

//destructuring (Parçalama İşlemi)
let regions = ["A", "B", "C"]
let [ilkEleman, ikinciEleman] = regions

console.log(ilkEleman +" "+ ikinciEleman)

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)