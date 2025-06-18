let nota1 = Number(prompt("digite sua primeira nota")) 
let nota2 = Number(prompt("digite sua segunda nota"))

let media = (nota1 + nota2)/2

if(media >= 7){
    alert("sua média é " + media + " você passou!")
}
else if (media < 7){
    alert("sua média é " + media + " você esta em recuperação..se prepare para prova!")
}



