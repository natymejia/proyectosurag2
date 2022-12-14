export function validarFormulario(datos){

    //Referencias a etiquetas que quiero validar
    let etiquetaNombre=document.getElementById("nombres")
    let etiquetaDocumento=document.getElementById("documento")
    let etiquetaRegistro=document.getElementById("registro")

    //Validemos 3 campos del formulario
//nombres-docuemento-registro del médico
let nombresMedico=datos.nombre
let documentoMedico=datos.documento
let registroMedico=datos.registro

//Agregar todos los caminos posibles para validar el formulario
if(nombresMedico=="" && documentoMedico==""){
    etiquetaNombre.classList.add("is-invalid")
    etiquetaDocumento.classList.add("is.invalid")
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Nombre y documento son obligatorios',        
      })
}else if(nombresMedico=="" && documentoMedico!=""){
    etiquetaNombre.classList.add("is-invalid")
    etiquetaDocumento.classList.remove("is.invalid")
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El nombre es obligatorio',        
      })
}else if(nombresMedico!="" && documentoMedico==""){
    etiquetaNombre.classList.remove("is-invalid")
    etiquetaDocumento.classList.add("is.invalid")
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El documento es obligatorio',        
      })
}else{
    etiquetaNombre.classList.remove("is-invalid")
    etiquetaDocumento.classList.remove("is.invalid")
}

}

