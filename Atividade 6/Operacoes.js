var numb = prompt("Informe o primeiro número");
numb = parseFloat (numb);
var numbr = prompt("Informe o segundo número");
numbr = parseFloat (numbr);
alert("Resultados\nSoma: " + (numb+numbr)
     + "\nSubtração: " + (numb-numbr)
     + "\nMultipricação: " + (numb*numbr)
     + "\nDivisão: " + (numb/numbr).toFixed(2)
     + "\nMódulo: " + (numb%numbr));