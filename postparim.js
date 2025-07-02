let Num = Number(prompt("digite um número"))

posPar = "seu número é positivo e par"
posImpar = "seu número é positivo e impar"
negPar = "seu número é negativo e par"
negImpar = "seu número é negativo e impar"


if(Num > 0 && Num % 2 === 0){
    alert(posPar)
}
else if(Num < 0 && Num % 2 === 0){
    alert(negPar)
}
else if(Num > 0 && Num % 2 !== 0){
    alert(posImpar)
}
else if(Num < 0 && Num % 2 !== 0){
    alert(negImpar)
}
else{
    alert("número é nulo")
}