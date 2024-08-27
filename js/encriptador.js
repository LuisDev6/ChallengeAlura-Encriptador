function validarTextoIngresado() {
    const texto = document.getElementById("textoOriginal");
    const regex = /^[a-zñ\s,;:.]+$/;
    texto.value = texto.value.toLowerCase().replace(/[^a-zñ\s,;:.]/g, "");
    console.log(texto.value);
    return texto.value.match(regex);
}




const texto = document.getElementById("textoOriginal");
texto.addEventListener("input", validarTextoIngresado);


function encriptarTexto() {
    const textoOriginal = document.getElementById("textoOriginal").value;
    const textoEncriptado = textoOriginal.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    console.log(textoEncriptado);
    // Mostrar el texto encriptado en el <p> correspondiente
    const textoResultado = document.querySelector(".mensajeEncriptado");
    textoResultado.innerHTML = textoEncriptado;

    // Ocultar la imagen
    const imagen = document.querySelector(".imagenTexto");
    if (imagen) {
        imagen.style.display = 'none';
    }

    // Mostrar el botón de copiar, si está oculto
    const botonCopiar = document.querySelector(".boton__copiar");
    botonCopiar.style.display = 'block';
    const seccionResultado = document.querySelector(".seccion__resultado");
    seccionResultado.classList.add(".boton__visible");
    seccionResultado.style.justifyContent = 'space-between';
}

function desencriptarTexto() {
    const textoOriginal = document.getElementById("textoOriginal").value;
    const textoDesencriptado = textoOriginal.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    console.log(textoDesencriptado);
    // Mostrar el texto encriptado en el <p> correspondiente
    const textoResultado = document.querySelector(".mensajeEncriptado");
    textoResultado.innerHTML = textoDesencriptado;

    // Ocultar la imagen
    const imagen = document.querySelector(".imagenTexto");
    if (imagen) {
        imagen.style.display = 'none';
    }

    // Mostrar el botón de copiar, si está oculto
    const botonCopiar = document.querySelector(".boton__copiar");
    botonCopiar.style.display = 'block';
    const seccionResultado = document.querySelector(".seccion__resultado");
    seccionResultado.classList.add(".boton__visible");
    seccionResultado.style.justifyContent = 'space-between';
}

//BOTON DE COPIAR

const botonCopiar = document.querySelector(".boton__copiar");

botonCopiar.addEventListener("click", function () {
    const mensajeEncriptado = document.querySelector(".mensajeEncriptado").innerText;
    navigator.clipboard.writeText(mensajeEncriptado).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
});
