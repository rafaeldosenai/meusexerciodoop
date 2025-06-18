let numFruta = Number(prompt("quantas maçãs você quer levar?"))
let precoaPagar1 = numFruta * 0.25
let precoaPagar2 = numFruta * 0.30

if(numFruta < 12){
    alert("você tem que pagar " + precoaPagar2 + "R$")
}
if(numFruta >= 12){
    alert("você tem que pagar " + precoaPagar1 + "R$")
}
