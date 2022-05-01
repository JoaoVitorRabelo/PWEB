var nome = prompt("Como devo te chamar?");
var media = 0;
for(j=1;j<=3;j++){
    var nota = prompt("Qual foi a nota" + j +"?");
    nota = parseFloat (nota);
    media = media+ nota;
}
alert(nome + "\nSua Média foi de: " + (media/3).toFixed(2));
confirm("Tudo Pronto");
