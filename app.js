let a = parseInt(prompt('Digite um número inteiro'));
let b = parseInt(prompt('Digite outro número inteiro'));
let c = parseInt(prompt('Digite um terceiro número inteiro'));

if (a+b > c) {
    document.write (`${a} + ${b} é maior que ${c}`) 
}
else if (a+b < c) {
    document.write (`${a} + ${b} é menor que ${c}`)           
}
else if (a+b == c) {
    document.write (`${a} + ${b} é igual a ${c}`)   
}

