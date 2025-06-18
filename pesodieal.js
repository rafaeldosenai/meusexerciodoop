let genero = prompt("qual o seu sexo?(masculino e feminino)")
let altura = Number(prompt("qual é sua altura em metros?"))
let pesoidealM = (72.7 * altura)- 58
let pesoidealF = (62.1 * altura)- 44.7

if(genero == "masculino" ){
    alert("seu peso ideal é " + pesoidealM)
}
if(genero == "feminino" ){
    alert("seu peso ideal é " + pesoidealF)
}