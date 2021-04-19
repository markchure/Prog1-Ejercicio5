var max = 10;
var acumulador=0;

for(var i = 1; i<=max; i++){
  var numero = parseInt(prompt("Ingrese un número (" + i + "/" + max + "): "));
  acumulador = acumulador + numero;
}

var promedio = acumulador/(i-1);
console.log("El promedio es: " + promedio);