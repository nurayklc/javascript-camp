let cart = [
  { id: 1, productName: "Telefon", quantity: 3, unitPrice: 50 },
  { id: 2, productName: "Bardak", quantity: 2, unitPrice: 20 },
  { id: 3, productName: "Kalem", quantity: 4, unitPrice: 40 },
  { id: 4, productName: "Kulaklık", quantity: 2, unitPrice: 60 },
  { id: 5, productName: "Kitap", quantity: 5, unitPrice: 30 },
  { id: 6, productName: "Pot", quantity: 3, unitPrice: 10 },
];
// map fonksiyonu
cart.map((product) => {
  console.log(product.productName + ":" + product.quantity * product.unitPrice);
});

// filter fonksiyonu
let quantityOver = cart.filter(product => product.quantity>2)

console.log(quantityOver)

// reduce Fonksiyonu 
// acc -> default parametre, son verilen "0" değeri acc'ye atanan başlangıç değeri
let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)

console.log("Total:" + total)

// referans type
function addToCart(sepet) {
  sepet.push({ id: 7, productName: "Monitor", quantity: 8, unitPrice: 3000 });
}
addToCart(cart);
console.log(cart);

// değer type
let number = 10;

function sum(number) {
  number += 1;
}

sum(number);
console.log(number);
