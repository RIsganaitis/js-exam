/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

console.log("Keys:");
Object.keys(audi).forEach(function keys(key) {
  console.log(key);
})
console.log("---")
console.log("Keys:");
for(let i in audi){
  console.log(i);
}