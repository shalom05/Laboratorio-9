const contenedorComentarios = document.getElementById("contenedorComentarios")
const contenedorPrincipal = document.getElementById("contenedorPrincipal")
const modal = document.getElementById("agregarComentarios")
const boton = document.getElementById("button")
const textarea = document.getElementById("makeComment")

function mostrarModal() {
    contenedorPrincipal.classList.add("blur")
    modal.classList.remove("agregarComentarioInvisible")
    modal.classList.add("agregarComentarioVisible")
    boton.disabled = true;
}

function ocultarModal() {
    contenedorPrincipal.classList.remove("blur")
    modal.classList.remove("agregarComentarioVisible")
    modal.classList.add("agregarComentarioInvisible")
    boton.classList.remove("activeButton")
    boton.classList.add("deactivatedButton")
    boton.disabled = true;
    textarea.value = ""
    
}

function activarBoton() {
    var value = textarea.value
    if ( value === "") {
        boton.classList.remove("activeButton")
        boton.classList.add("deactivatedButton")
        boton.disabled = true;
    } else {
        boton.classList.remove("deactivatedButton")
        boton.classList.add("activeButton")
        boton.disabled = false;
    }
}

function crearPublicacion() {
    var text = textarea.value
    var comment = `
    <div class="comentario">
        <div class="superiorComentario">
        <img src="./80813584-silueta-negra-contorno-grueso-de-la-mitad-del-cuerpo-sin-rostro-mujer-con-el-medio-recto-peinado.webp" alt="profilePic">
            <p >Salomé Ruiz</p>
        </div>
        <p class="publicComment">${text}</p>
    </div>
    `
    contenedorComentarios.innerHTML += comment
    ocultarModal()
}