// Seleccionamos nuestros elementos HTML

const contenedor = document.querySelector(".contenedor");
const nota_input = document.querySelector(".nota");
const boton_crear = document.querySelector(".boton-crear");

/*

Haremos que el text-area aumente su altura cuando no quepa más texto con la altura predeterminada

*/

const altura_predeterminada = 65;
const limite_caracteres = 87;

// Agregamos un evento para cuando se escriba en el text-area

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
    const error = document.querySelector(".error");


    if (nota_input.value.length < 5) {
        error.innerHTML = "Ingresa una nota de al menos cinco caracteres";
        error.style.fontWeight = 700;
    }

    else {
        const notas = document.createElement("div");
        notas.classList.add("notas");
        notas.textContent = nota_input.value;

        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("boton-eliminar");
        botonEliminar.textContent = "Borrar";

        botonEliminar.addEventListener("click", () => {
            contenedor.removeChild(notas);
        });

        contenedor.appendChild(notas);
        notas.appendChild(botonEliminar);
        error.innerHTML = "";
        nota_input.value = "";
        nota_input.style.height = "65px";
    }
});
