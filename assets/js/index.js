const imagen_gato = document.querySelector("#gato_gato");
let isBorderOn = false;
imagen_gato.addEventListener("click", () => {
    imagen_gato.style.border = isBorderOn ? "25px solid transparent" : "25px solid red";
    isBorderOn = !isBorderOn;
});

const total_stickers = document.querySelector("#total-stickers");
const cantidades = document.querySelectorAll(".numero");

cantidades.forEach(input => input.addEventListener("input", actualizarTotal));

function actualizarTotal() {
    let resultado = 0;
    cantidades.forEach(input => {
        resultado += parseInt(input.value) || 0;
    });
    total_stickers.innerHTML = resultado > 10 ? `Llevas demasiados stickers (${resultado})` : `Llevas ${resultado} stickers`;
}

const [select1, select2, select3] = [document.querySelector("#input1"), document.querySelector("#input2"), document.querySelector("#input3")];
const estado = document.querySelector("#estado-ingreso");
const botonIngresar = document.querySelector("#boton-ingreso");

const contrasena = "666";
const opciones = Array.from({ length: 10 }, (_, i) => i);

[select1, select2, select3].forEach(select => {
    agregarOpciones(select);
    select.addEventListener("input", () => estado.innerHTML = "");
});

botonIngresar.addEventListener("click", () => {
    const contrasenaIngresada = select1.value + select2.value + select3.value;
    estado.innerHTML = contrasenaIngresada === contrasena ? "Ingreso autorizado." : "Contraseña incorrecta.";
});

function agregarOpciones(selectElement) {
    opciones.forEach(opcion => {
        const option = document.createElement("option");
        option.value = opcion;
        option.textContent = opcion;
        selectElement.appendChild(option);
    });
}
