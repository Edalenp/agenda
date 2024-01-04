// Seleccionamos nuestros elementos HTML

const contenedor = document.querySelector(".contenedor");
const nota_input = document.querySelector(".nota");
const boton_crear = document.querySelector(".boton-crear");

/*

Haremos que el text-area aumente su altura cuando no quepa más texto 
con la altura predeterminada

*/

const altura_predeterminada = 65;
const limite_caracteres = 87;
nota_input.addEventListener("input", () => {
    ajustar_altura(nota_input);
});

function ajustar_altura(text_area) {
    const numero_caracteres = text_area.value.length;
    const nueva_altura = altura_predeterminada + Math.floor((numero_caracteres - limite_caracteres) / 10) * 20;
    text_area.style.height = nueva_altura + "px";
}

// Agregamos un evento para cuando se haga clic en el botón de crear 

boton_crear.addEventListener("click", () => {
    // Creamos la nota

    const notas = document.createElement("div");
    notas.classList.add("notas");
    notas.textContent = nota_input.value;

    // Creamos el botón eliminar dentro de la nota

    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("boton-eliminar");
    botonEliminar.textContent = "Borrar";

    // Agregamos el evento para eliminar la nota al hacer clic en el botón

    botonEliminar.addEventListener("click", () => {
        contenedor.removeChild(notas);
    });

    // Añadimos el botón eliminar a la nota

    notas.appendChild(botonEliminar);

    // Añadimos la nota al contenedor principal

    contenedor.appendChild(notas);

    // Limpiamos el input
    
    nota_input.value = "";

    // Establecemos la altura predeterminada del text-area 

    nota_input.style.height = "65px";
});

