const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");
const btnCifrar = document.getElementById("btnCifrar");
const btnDescifrar = document.getElementById("btnDescifrar");
const valorDesplazamiento = document.getElementById("valorDesplazamiento");

// Actualizar el valor del desplazamiento dinámicamente
desplazamiento.addEventListener("input", () => {
    valorDesplazamiento.textContent = desplazamiento.value;
});

// Función para cifrar el texto con el Cifrado César
function cifrarTexto() {
    const textoIngresado = texto.value;
    const desplazamientoValor = parseInt(desplazamiento.value);

    textoCifrado.value = textoIngresado.split('').map(c => {
        let mayus = (c === c.toUpperCase());
        let valorEntero = c.toLowerCase().charCodeAt(0);

        if (valorEntero >= 97 && valorEntero <= 122) {
            valorEntero = ((valorEntero - 97 + desplazamientoValor) % 26) + 97;
        }

        return mayus ? String.fromCharCode(valorEntero).toUpperCase() : String.fromCharCode(valorEntero);
    }).join('');
}

// Función para descifrar el texto con el Cifrado César
function descifrarTexto() {
    const textoIngresado = texto.value;
    const desplazamientoValor = parseInt(desplazamiento.value);

    textoCifrado.value = textoIngresado.split('').map(c => {
        let mayus = (c === c.toUpperCase());
        let valorEntero = c.toLowerCase().charCodeAt(0);

        if (valorEntero >= 97 && valorEntero <= 122) {
            valorEntero = ((valorEntero - 97 - desplazamientoValor + 26) % 26) + 97;
        }

        return mayus ? String.fromCharCode(valorEntero).toUpperCase() : String.fromCharCode(valorEntero);
    }).join('');
}

// Agregar eventos a los botones
btnCifrar.addEventListener("click", cifrarTexto);
btnDescifrar.addEventListener("click", descifrarTexto);
