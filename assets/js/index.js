const imagen_gato = document.querySelector("#gato_gato")
imagen_gato.addEventListener("click", turnBorder)
let isBorderOn = false


function turnBorder() {
   const newColor =  
    imagen_gato.style.border = isBorderOn ? "25px solid red" : "25px solid transparent";
    isBorderOn = !isBorderOn; // Alterna el estado
}


const total_stickers = document.querySelector("#total-stickers")
const cantidades = document.querySelectorAll(".numero")

cantidades.forEach(input => {
    input.addEventListener("input", actualizarTotal)
})

function actualizarTotal(){
    let resultado = 0
    cantidades.forEach(input =>{
        resultado += parseInt(input.value) || 0
    })

    total_stickers.innerHTML = resultado > 10 ? `Llevas demasiados stickers (${resultado})` : `Llevas ${resultado} stickers`
}