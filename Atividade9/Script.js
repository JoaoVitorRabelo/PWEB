var num1 = prompt("Qual é o primeiro número?"),
num2 = prompt("Qual é o primeiro número?"),
num3 = prompt("Qual é o primeiro número?"),
num = [num1,num2,num3];
num.sort(function(a,b){return a-b});
alert("Números em órdem crescente:\n" + num);


var arr1 = prompt("Qual é o primeiro número?"),
arr2 = prompt("Qual é o primeiro número?"),
arr3 = prompt("Qual é o primeiro número?"),
arr = [arr1,arr2,arr3];
var max = arr.reduce(function(a,b){
    return Math.max(a,b);
});
alert("O maior número é:\n" + max);