
let nomes = ["joalis", "aline", "milena", "amanda", "neide"];
console.log("Terceiro nome:", nomes[2]); 

nomes.push("ricardo");   
nomes.unshift("carla");  
console.log("Array após adições:", nomes);

nomes.pop();
console.log("Array após remoção do último nome:", nomes);

let numeros = [2, 4, 6, 8];
let dobrados = numeros.map(num => num * 2);
console.log("Array dobrado:", dobrados);

let lista = [1, 3, 5, 7, 9];
let maioresQue5 = lista.filter(num => num > 5);
console.log("Números maiores que 5:", maioresQue5);

