
//Kodlama.io İlk Gün Odev-18.10.21

//değişken tanımlama, const sabit değişkenler için tanımlanır.
let student = { id: 1, name: "Asdaf" };
console.log(student);

//function tanımlama
function save(score = 10, ogrenci) {
  console.log(ogrenci.name + " : " + score);
}

save(undefined, student);

//array tanımlama
let students = ["A", "B", "C", "D"];

console.log(students);

let studentsTwo = [
  student,
  { id: 2, name: "Kaya" },
  "Ankara",
  { city: "İstanbul" },
];

console.log(studentsTwo);


//rest (geriye kalanlar), yapısı dizi şeklindedir.
let showProducts = function (id, ...products) {
    console.log(id);
    console.log(products);
}

console.log(typeof showProducts);
//rest dizi şeklinde olduğu için gönderilen parametreler virgül ile ayrılarak gönderilmelidir.
showProducts(10, "A", "B");

//spread(ayrıştırma) operatörü
let points = [1, 2, 3, 50, 60, 14, 15]; // ÇIKTI: 1 2 3 50 60 14 15
console.log(...points);
console.log(..."ABC", "2", ..."DEF", "H") // ÇIKTI: A B C 2 D E F H

//Destructuring (Parçalama)
//Array elemanlarını değişkenlere aktarır.
let populations = [10000, 20000, 30000, [40000,50000]];
let [small, medium, high, veryhigh, max] = populations;
console.log(small); // çıktı: 10000
console.log(medium); // 20000
console.log(high);  //30000
console.log(veryhigh); // [40000, 50000]
console.log(max) //undefined olur.

//Array için destructuring
function someFunction([small1], number) {
    console.log(small1)
}

someFunction(populations); // 10000

//Obje için destructuring
let category = {id:1, name:"İçecek"};
//Normal yazdırıldı.
console.log(category.id);
console.log(category.name);

//Destructuring kullanarak yazdırıldı.
let {id, names} = category;
console.log(id);
console.log(names)