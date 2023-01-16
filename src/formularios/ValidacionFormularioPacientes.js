export function validarFormulariopaciente(datosp){

    //Referencias a etiquetas que quiero validar
    let etiquetaNombre1=document.getElementById("nombre1")
    let etiquetaIdentificacion1=document.getElementById("identificacion1")

    //Validemos 3 campos del formulario
//nombres-docuemento-registro del médico
let nombresPaciente=datosp.nombre1
let documentoPaciente=datosp.identificacion1


//Agregar todos los caminos posibles para validar el formulario
if(nombresPaciente=="" && documentoPaciente==""){
    etiquetaNombre1.classList.add("is-invalid")
    etiquetaIdentificacion1.classList.add("is-invalid")
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Nombre y documento son obligatorios',        
      })
}else if(nombresPaciente=="" && documentoPaciente!=""){
    etiquetaNombre1.classList.add("is-invalid")
    etiquetaIdentificacion1.classList.remove("is-invalid")
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El nombre es obligatorio',        
      })
}else if(nombresPaciente!="" && documentoPaciente==""){
    etiquetaNombre1.classList.remove("is-invalid")
    etiquetaIdentificacion1.classList.add("is-invalid")
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El documento es obligatorio',        
      })
}else{
    etiquetaNombre1.classList.remove("is-invalid")
    etiquetaIdentificacion1.classList.remove("is-invalid")
}

}

