let idadePres1 = Number(prompt("digite a idade do candidato 1"))
let idadePres2 = Number(prompt("digite a idade do candidato 2"))
let idadeVice1 = Number(prompt("digite a idade do vice 1"))
let idadeVice2 = Number(prompt("digite a idade do vice 2"))

if(idadePres1 + idadeVice1 > idadePres2 + idadeVice2){
    alert("o primeiro pessoal tem mais experiência!")
}
if(idadePres1 + idadeVice1 < idadePres2 + idadeVice2){
    alert("o segundo pessoal tem mais experiência!")
}