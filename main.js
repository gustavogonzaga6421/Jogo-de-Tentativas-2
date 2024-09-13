// Seleciona o elemento <h1> e define seu conteúdo inicial
var_H1 = document.querySelector('h1');
var_H1.innerHTML = 'Secret Number';

// Seleciona o elemento <p> e define seu conteúdo inicial
varP = document.querySelector('p');
varP.innerHTML = 'Type a number between 1 and 10';

// Gera um número secreto aleatório entre 1 e 10
let secret_number = Math.floor((Math.random() * 10) + 1);

// Inicializa o contador de tentativas
let attempts = 0;

function verificarChute() {
    // Obtém o valor digitado pelo usuário no campo de entrada
    let guess = document.querySelector('input').value;
    
    // Incrementa o contador de tentativas a cada chamada da função
    attempts++;

    // Verifica se o palpite está correto
    if (guess == secret_number) {
        // Ajusta a mensagem com base no número de tentativas
        let attemptsText = attempts === 1 ? 'tentativa' : 'tentativas';
        var_H1.innerHTML = `Parabéns, você acertou! Você gastou ${attempts} ${attemptsText}.`;
        
        // Habilita o botão de reiniciar
        let varButton = document.getElementById('reiniciar');
        varButton.removeAttribute('disabled');
    } else {
        // Informa se o número secreto é maior ou menor que o palpite
        if (guess < secret_number) {
            varP.innerHTML = 'Tente novamente, o número é maior.';
        } else {
            varP.innerHTML = 'Tente novamente, o número é menor.';
        }
    }
}
