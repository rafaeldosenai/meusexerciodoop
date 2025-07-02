let Nota1 = Number(prompt("digite sua primeira nota")) 
let Nota2 = Number(prompt("digite sua segunda nota"))

let media = (Nota1 + Nota2)/2

if(media >= 9 && media <= 10){
    alert("sua nota foi:"+media+". você tirou um A")
}
if(media >= 7.5 && media < 9){
    alert("sua nota foi:"+media+". você tirou um B")
}
if(media >= 6.0 && media < 7.5){
    alert("sua nota foi:"+media+". você tirou um C")
}
if(media >= 4.0 && media < 6.0){
    alert("sua nota foi:"+media+". você tirou um D")
}
if(media >= 0 && media < 4.0){
    alert("sua nota foi:"+media+". você tirou um E")
}
