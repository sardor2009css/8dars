const sozlar = ["non", "banan", "mashina", "asal", "olma", "aziza", "Gul"];

let nBilgan = [];
let nYoqlar = [];

sozlar.forEach(soz => {
  if (soz.toLowerCase().includes("n")) {
    nBilgan.push(soz);
  } else {
    nYoqlar.push(soz);
  }
});

console.log(nBilgan, "'n harfi ishtirok etgan so'zlar'");
console.log(nYoqlar, "'n harfi ishtirok etmagan so'zlar'");

