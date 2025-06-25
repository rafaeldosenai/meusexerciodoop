let valorProduto = Number(prompt("Digite o valor do produto"))
let vendaSeMenos20 = valorProduto * 1.45
let vendaSeMaisOu20 = valorProduto * 1.30

if(valorProduto < 20){
    alert("Você terá que vender o produto por:"+vendaSeMenos20+"R$")
}
if(valorProduto >= 20){
    alert("Você terá que vender o produto por:"+vendaSeMaisOu20+"R$")
}