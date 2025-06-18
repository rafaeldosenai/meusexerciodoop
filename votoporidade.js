let = idade = Number(prompt("Digite sua idade para verificar se você pode votar!"))

if(idade < 16){
    alert("você ainda não pode votar")
}
if(idade >= 16 && idade < 18){
    alert("você pode votar! mas não é obrigatório!")
}
if(idade >= 18 && idade <= 65){
    alert("você pode e TEM que votar!")
}
if(idade > 65){
    alert("você pode votar! mas não é obrigatório!")
}