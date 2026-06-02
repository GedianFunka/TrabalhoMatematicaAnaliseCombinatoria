function fatorial(n) {
    return n <= 1 ? 1 : n * fatorial(n - 1);
}

function calcularAnagramas(palavra) {
    let letras = {};

    for (let letra of palavra) {
        letras[letra] = (letras[letra] || 0) + 1;
    }

    let n = palavra.length;

    let denominador = 1;

    for (let qtd of Object.values(letras)) {
        denominador *= fatorial(qtd);
    }

    return fatorial(n) / denominador;
}

function calcular() {
    let palavra = document.getElementById("palavra").value;

    if (palavra.trim() === "") {
        document.getElementById("resultado").innerHTML = "<p class='erro'>Digite uma palavra válida!</p>";
        return;
    }

    let resultado = calcularAnagramas(palavra);
    
    document.getElementById("resultado").innerHTML = 
        `<p>🔢 Número de anagramas de <strong>${palavra}</strong>: ${resultado}</p>`;
}