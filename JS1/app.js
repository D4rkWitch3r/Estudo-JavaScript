alert("Bem-vindo ao nosso jogo do número secreto");
let numeroMax = 1000
let numeroSecreto = parseInt(Math.random () * numeroMax + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt(`Me informe um número entre 1 e ${numeroMax}`);
    if (chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}`);
        tentativas += 1;
    }

    else if (chute < numeroSecreto){
        alert(`O número secreto é maior que ${chute}`);
        tentativas += 1;
    }
}

if (chute == numeroSecreto){
    alert(`Parabéns, você descobriu o número secreto ${numeroSecreto}`);
    alert('O número de tentativas foi de: ' + tentativas)
}
